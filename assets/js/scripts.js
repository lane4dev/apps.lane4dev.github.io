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
  var slides = root.querySelectorAll('.app-shots__slide');
  var dots = root.querySelectorAll('.app-shots__dot');
  var prevButton = root.querySelector('[data-shots-prev]');
  var nextButton = root.querySelector('[data-shots-next]');
  var autoTimer = null;
  var settleTimer = null;
  var lastMeasured = 0; // slide nearest the viewport center
  var pending = null;    // slide a transition is currently heading to

  if (!viewport || !prevButton || !nextButton || slides.length === 0) {
    return;
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function goTo(index) {
    var count = slides.length;
    pending = ((index % count) + count) % count;
    var slide = slides[pending];
    var target = slide.offsetLeft + slide.offsetWidth / 2 - viewport.offsetWidth / 2;
    var jump = Math.abs(target - viewport.scrollLeft) > viewport.offsetWidth * 2;
    viewport.scrollTo({
      left: target,
      behavior: jump ? 'auto' : 'smooth'
    });
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

    var shown = activeIndex();

    dots.forEach(function(dot, i) {
      dot.classList.toggle('is-active', i === shown);
    });
  }

  function settle() {
    pending = null;
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
      goTo(i);
    });
  });

  update();

  // ponytail: fixed 6s autoplay, stop entirely on first user interaction
  if (motionAllowed && slides.length > 1) {
    autoTimer = setInterval(function() {
      goTo(activeIndex() + 1);
    }, 6000);
  }
});
