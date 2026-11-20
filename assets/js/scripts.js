document.documentElement.classList.add('js-enabled');

var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

if (menuTrigger && menuContainer) {
  menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  };
}

var techHero = document.querySelector('.tech-hero');
var motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var finePointer = window.matchMedia('(pointer: fine)').matches;

if (techHero && motionAllowed && finePointer) {
  techHero.addEventListener('pointermove', function(event) {
    var bounds = techHero.getBoundingClientRect();
    var pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
    var pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;

    techHero.style.setProperty('--pointer-x', pointerX + '%');
    techHero.style.setProperty('--pointer-y', pointerY + '%');
  });
}

var revealItems = document.querySelectorAll('.js-reveal');

if ('IntersectionObserver' in window && motionAllowed) {
  var revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealItems.forEach(function(item) {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach(function(item) {
    item.classList.add('is-visible');
  });
}

var appShots = document.querySelectorAll('.app-shots');

appShots.forEach(function(root) {
  var viewport = root.querySelector('.app-shots__viewport');
  var track = root.querySelector('.app-shots__track');
  var originals = root.querySelectorAll('.app-shots__slide');
  var slides;
  var dots = root.querySelectorAll('.app-shots__dot');
  var prevButton = root.querySelector('[data-shots-prev]');
  var nextButton = root.querySelector('[data-shots-next]');
  var autoTimer = null;
  var settleTimer = null;
  var lastMeasured = 1; // Physical position, including the boundary copies.
  var pending = null;

  if (!viewport || !track || !prevButton || !nextButton || originals.length < 2) {
    return;
  }

  var firstCopy = originals[0].cloneNode(true);
  var lastCopy = originals[originals.length - 1].cloneNode(true);
  firstCopy.setAttribute('aria-hidden', 'true');
  lastCopy.setAttribute('aria-hidden', 'true');
  track.insertBefore(lastCopy, originals[0]);
  track.insertBefore(firstCopy, originals[originals.length - 1].nextSibling);
  slides = track.querySelectorAll('.app-shots__slide');

  function positionOf(index) {
    var slide = slides[index];
    return slide.offsetLeft + slide.offsetWidth / 2 - viewport.offsetWidth / 2;
  }

  function logicalIndex(index) {
    return (index - 1 + originals.length) % originals.length;
  }

  function jumpTo(index) {
    viewport.scrollTo({ left: positionOf(index), behavior: 'instant' });
    lastMeasured = index;
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function goTo(index) {
    // If another request arrives while crossing an edge, continue from the
    // equivalent original slide before moving on to the next destination.
    if (index < 0) {
      jumpTo(originals.length);
      index = originals.length - 1;
    } else if (index >= slides.length) {
      jumpTo(1);
      index = 2;
    }
    pending = index;
    viewport.scrollTo({
      left: positionOf(index),
      behavior: motionAllowed ? 'smooth' : 'instant'
    });
    update();
  }

  // Buttons and autoplay must chain from where the carousel is heading.
  // Deriving the index from mid-flight geometry instead resolves early in
  // a transition to the slide the animation is already moving to, which
  // makes the click a visible no-op.
  function activeIndex() {
    return pending !== null ? pending : lastMeasured;
  }

  // Scales/dims/tilts slides by distance from the viewport center:
  // distance 0 is the centered slide (scale 1.5), 1 is a full side slide
  // (scale 1, tilted 35deg).
  function update() {
    var rect = viewport.getBoundingClientRect();
    var center = rect.left + viewport.offsetWidth / 2;
    var spacing = slides[0].offsetWidth || 1;
    var index = 0;
    var nearest = Infinity;

    slides.forEach(function(slide, i) {
      var slideRect = slide.getBoundingClientRect();
      var slideCenter = slideRect.left + slideRect.width / 2;
      var offset = Math.abs(slideCenter - center);
      var distance = Math.min(offset / spacing, 1);
      var direction = slideCenter < center ? -1 : 1;

      slide.style.setProperty('--shot-distance', distance.toFixed(3));
      slide.style.setProperty('--shot-tilt', (direction * distance * 35).toFixed(1) + 'deg');
      slide.style.zIndex = String(Math.round(100 - distance * 100));

      if (offset < nearest) {
        nearest = offset;
        index = i;
      }
    });

    lastMeasured = index;

    var shown = logicalIndex(activeIndex());

    dots.forEach(function(dot, i) {
      dot.classList.toggle('is-active', i === shown);
    });
  }

  function settle() {
    pending = null;
    update();
    if (lastMeasured === 0) {
      jumpTo(originals.length);
    } else if (lastMeasured === slides.length - 1) {
      jumpTo(1);
    }
    update();
  }

  viewport.addEventListener('scroll', function() {
    update();

    if (settleTimer) {
      clearTimeout(settleTimer);
    }

    settleTimer = setTimeout(settle, 120);
  }, { passive: true });
  viewport.addEventListener('pointerdown', stopAuto);
  viewport.addEventListener('keydown', stopAuto);

  prevButton.addEventListener('click', function() {
    stopAuto();
    goTo(activeIndex() - 1);
  });

  nextButton.addEventListener('click', function() {
    stopAuto();
    goTo(activeIndex() + 1);
  });

  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() {
      stopAuto();
      var target = i + 1;
      var current = activeIndex();
      if (i === 0 && current === originals.length) {
        target = slides.length - 1;
      } else if (i === originals.length - 1 && current === 1) {
        target = 0;
      }
      goTo(target);
    });
  });

  jumpTo(1);
  update();

  // Fixed 6s autoplay, stop entirely on first user interaction
  if (motionAllowed && slides.length > 1) {
    autoTimer = setInterval(function() {
      goTo(activeIndex() + 1);
    }, 6000);
  }
});
