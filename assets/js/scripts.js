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

// Homepage Section 01: Sticky parallax works traversal (desktop + motionAllowed)
var worksStage = document.querySelector('[data-works-stage]');

if (worksStage && motionAllowed) {
  var worksMedia = Array.prototype.slice.call(worksStage.querySelectorAll('[data-works-media]'));
  var worksCopies = Array.prototype.slice.call(worksStage.querySelectorAll('[data-works-copy]'));
  var worksGlows = Array.prototype.slice.call(worksStage.querySelectorAll('[data-works-glow]'));
  var worksSteps = Array.prototype.slice.call(worksStage.querySelectorAll('[data-works-step]'));
  var worksAmbient = worksStage.querySelector('.works-stage__ambient');
  var desktopQuery = window.matchMedia('(min-width: 1024px)');
  var count = worksCopies.length;
  var activeStep = 0;
  var rafPending = false;
  var listening = false;

  function applyStepState(index, localProgress, globalProgress) {
    activeStep = index;

    worksMedia.forEach(function(item, i) {
      item.classList.toggle('is-active', i === index);
      item.classList.toggle('is-past', i < index);
      if (i === index) {
        var shift = (0.5 - localProgress) * 28;
        item.style.setProperty('--media-shift', shift.toFixed(1) + 'px');
      } else {
        item.style.removeProperty('--media-shift');
      }
    });

    worksCopies.forEach(function(item, i) {
      item.classList.toggle('is-active', i === index);
    });

    worksGlows.forEach(function(item, i) {
      item.classList.toggle('is-active', i === index);
    });

    worksSteps.forEach(function(step, i) {
      step.classList.toggle('is-active', i === index);
      step.classList.toggle('is-done', i < index);
      step.setAttribute('aria-selected', i === index ? 'true' : 'false');
      if (i === index) {
        var barProgress = Math.max(0.08, Math.min(1, localProgress));
        step.style.setProperty('--step-progress', barProgress.toFixed(3));
      } else {
        step.style.removeProperty('--step-progress');
      }
    });

    if (worksAmbient) {
      var ambientShift = (0.5 - globalProgress) * 44;
      worksAmbient.style.setProperty('--ambient-shift', ambientShift.toFixed(1) + 'px');
    }
  }

  function measureWorksScroll() {
    rafPending = false;
    if (!worksStage.classList.contains('is-enhanced') || count < 1) {
      return;
    }

    var rect = worksStage.getBoundingClientRect();
    var headerOffset = 82;
    var scrollable = Math.max(1, rect.height - (window.innerHeight - headerOffset));
    var scrolled = Math.max(0, Math.min(scrollable, headerOffset - rect.top));
    var globalProgress = scrolled / scrollable;
    var scaled = globalProgress * count;
    var index = Math.min(count - 1, Math.floor(scaled));
    var localProgress = index === count - 1
      ? Math.min(1, scaled - index)
      : Math.max(0, Math.min(1, scaled - index));

    applyStepState(index, localProgress, globalProgress);
  }

  function scheduleMeasure() {
    if (!rafPending) {
      rafPending = true;
      window.requestAnimationFrame(measureWorksScroll);
    }
  }

  function scrollToStep(index) {
    if (!worksStage.classList.contains('is-enhanced') || count < 1) {
      return;
    }

    var rect = worksStage.getBoundingClientRect();
    var stageTop = rect.top + window.scrollY;
    var headerOffset = 82;
    var scrollable = Math.max(1, rect.height - (window.innerHeight - headerOffset));
    var targetProgress = (index + 0.18) / count;
    var targetY = stageTop - headerOffset + scrollable * targetProgress;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }

  function bindScroll() {
    if (!listening) {
      window.addEventListener('scroll', scheduleMeasure, { passive: true });
      window.addEventListener('resize', scheduleMeasure, { passive: true });
      listening = true;
    }
  }

  function unbindScroll() {
    if (listening) {
      window.removeEventListener('scroll', scheduleMeasure);
      window.removeEventListener('resize', scheduleMeasure);
      listening = false;
    }
  }

  function syncDesktopMode() {
    if (desktopQuery.matches && count > 1) {
      worksStage.classList.add('is-enhanced');
      measureWorksScroll();
    } else {
      worksStage.classList.remove('is-enhanced');
      unbindScroll();
    }
  }

  if ('IntersectionObserver' in window) {
    var stageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && worksStage.classList.contains('is-enhanced')) {
          bindScroll();
          scheduleMeasure();
        } else {
          unbindScroll();
        }
      });
    }, { threshold: 0 });
    stageObserver.observe(worksStage);
  } else {
    bindScroll();
  }

  worksSteps.forEach(function(step, i) {
    step.addEventListener('click', function() {
      scrollToStep(i);
    });
  });

  worksCopies.forEach(function(copy, i) {
    copy.addEventListener('focusin', function() {
      if (worksStage.classList.contains('is-enhanced') && i !== activeStep) {
        scrollToStep(i);
      }
    });
  });

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', syncDesktopMode);
  }
  syncDesktopMode();
}

// Homepage Hero: Full-area Tactile Swiss Grid (movable-type geometric blocks)
var heroSwiss = document.querySelector('[data-hero-swiss]');
var homeHeroEl = heroSwiss ? heroSwiss.closest('.home-hero') : null;

if (heroSwiss && homeHeroEl) {
  var glyphTemplates = [
    // Quarter arc
    '<svg class="swiss-glyph" viewBox="0 0 40 40" fill="none"><path d="M 6 34 A 28 28 0 0 1 34 6" stroke="currentColor" stroke-width="1.4"/></svg>',
    // Architectural L-bracket
    '<svg class="swiss-glyph" viewBox="0 0 40 40" fill="none"><path d="M 10 10 L 10 30 L 30 30" stroke="currentColor" stroke-width="1.4"/></svg>',
    // Diagonal hairline
    '<svg class="swiss-glyph" viewBox="0 0 40 40" fill="none"><line x1="9" y1="31" x2="31" y2="9" stroke="currentColor" stroke-width="1.3"/></svg>',
    // Crosshair plus
    '<svg class="swiss-glyph" viewBox="0 0 40 40" fill="none"><path d="M 20 10 V 30 M 10 20 H 30" stroke="currentColor" stroke-width="1.3"/></svg>',
    // Half ring + anchor dot
    '<svg class="swiss-glyph" viewBox="0 0 40 40" fill="none"><path d="M 10 20 A 10 10 0 0 1 30 20" stroke="currentColor" stroke-width="1.4"/><circle cx="20" cy="27" r="2.2" fill="currentColor"/></svg>',
    // Offset ink dot
    '<svg class="swiss-glyph" viewBox="0 0 40 40" fill="none"><circle cx="14" cy="14" r="3.2" fill="currentColor"/><circle cx="26" cy="26" r="1.4" stroke="currentColor" stroke-width="1.2"/></svg>',
    // Double parallel bars
    '<svg class="swiss-glyph" viewBox="0 0 40 40" fill="none"><line x1="12" y1="14" x2="28" y2="14" stroke="currentColor" stroke-width="1.4"/><line x1="12" y1="26" x2="22" y2="26" stroke="currentColor" stroke-width="1.4"/></svg>'
  ];
  var accentClasses = ['is-accent-blue', 'is-accent-cyan', 'is-accent-coral'];
  var swissCells = [];
  var populatedCells = [];
  var cols = 0;
  var rows = 0;
  var lastHoverIndex = -1;
  var swissTimer = null;
  var heroVisible = true;
  var resizeTimer = null;

  function seededHash(n) {
    var x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  }

  function triggerTile(cell, durationMs) {
    if (!cell || !cell.glyph) {
      return;
    }
    var now = Date.now();
    if (now - cell.lastTriggered < 360) {
      return;
    }
    cell.lastTriggered = now;
    cell.rot += cell.dir * 90;
    cell.glyph.style.setProperty('--glyph-rot', cell.rot + 'deg');

    var accent = accentClasses[Math.floor(Math.random() * accentClasses.length)];
    cell.el.classList.remove('is-accent-blue', 'is-accent-cyan', 'is-accent-coral');
    cell.el.classList.add(accent);

    if (cell.clearTimer) {
      clearTimeout(cell.clearTimer);
    }
    cell.clearTimer = setTimeout(function() {
      cell.el.classList.remove('is-accent-blue', 'is-accent-cyan', 'is-accent-coral');
    }, durationMs || 1400);
  }

  function buildSwissGrid() {
    var rect = homeHeroEl.getBoundingClientRect();
    var targetSize = window.innerWidth >= 1024 ? 88 : 68;
    var nextCols = Math.max(5, Math.round(rect.width / targetSize));
    var nextRows = Math.max(6, Math.round(rect.height / targetSize));

    if (nextCols === cols && nextRows === rows && swissCells.length > 0) {
      return;
    }

    cols = nextCols;
    rows = nextRows;
    heroSwiss.style.setProperty('--swiss-cols', String(cols));
    heroSwiss.style.setProperty('--swiss-rows', String(rows));

    var frag = document.createDocumentFragment();
    swissCells = [];
    populatedCells = [];

    for (var r = 0; r < rows; r++) {
      var rowRatio = r / Math.max(1, rows - 1);
      var isBottomBand = rowRatio > 0.62;
      var density = isBottomBand ? 0.24 : 0.44;

      for (var c = 0; c < cols; c++) {
        var idx = r * cols + c;
        var h1 = seededHash(idx + cols * 13);
        var h2 = seededHash(idx * 3.7 + rows * 7);
        var el = document.createElement('div');
        el.className = 'swiss-cell' + (isBottomBand ? ' is-quiet' : '');

        var cellData = {
          el: el,
          glyph: null,
          rot: Math.floor(h2 * 4) * 90,
          dir: h2 > 0.5 ? 1 : -1,
          lastTriggered: 0,
          clearTimer: null
        };

        if (h1 < density) {
          var tplIndex = Math.floor(h2 * glyphTemplates.length) % glyphTemplates.length;
          el.innerHTML = glyphTemplates[tplIndex];
          var glyph = el.firstChild;
          glyph.style.setProperty('--glyph-rot', cellData.rot + 'deg');
          cellData.glyph = glyph;
          populatedCells.push(cellData);
        } else {
          var dot = document.createElement('span');
          dot.className = 'swiss-empty-dot';
          el.appendChild(dot);
        }

        swissCells.push(cellData);
        frag.appendChild(el);
      }
    }

    heroSwiss.innerHTML = '';
    heroSwiss.appendChild(frag);
    lastHoverIndex = -1;
  }

  function runSwissBeat() {
    if (!heroVisible || !motionAllowed || populatedCells.length === 0) {
      return;
    }
    var picks = Math.min(3, populatedCells.length);
    for (var i = 0; i < picks; i++) {
      var candidate = populatedCells[Math.floor(Math.random() * populatedCells.length)];
      triggerTile(candidate, 1700);
    }
  }

  function startSwissLoop() {
    if (!swissTimer && motionAllowed) {
      swissTimer = setInterval(runSwissBeat, 2400);
    }
  }

  function stopSwissLoop() {
    if (swissTimer) {
      clearInterval(swissTimer);
      swissTimer = null;
    }
  }

  if (motionAllowed && finePointer) {
    homeHeroEl.addEventListener('pointermove', function(event) {
      if (cols < 1 || rows < 1) {
        return;
      }
      var rect = homeHeroEl.getBoundingClientRect();
      var relX = event.clientX - rect.left;
      var relY = event.clientY - rect.top;
      if (relX < 0 || relY < 0 || relX > rect.width || relY > rect.height) {
        return;
      }
      var c = Math.min(cols - 1, Math.floor((relX / rect.width) * cols));
      var r = Math.min(rows - 1, Math.floor((relY / rect.height) * rows));
      var index = r * cols + c;

      if (index === lastHoverIndex) {
        return;
      }

      if (lastHoverIndex >= 0 && swissCells[lastHoverIndex]) {
        swissCells[lastHoverIndex].el.classList.remove('is-hovered');
      }
      lastHoverIndex = index;

      var target = swissCells[index];
      if (!target) {
        return;
      }
      target.el.classList.add('is-hovered');
      if (target.glyph) {
        triggerTile(target, 1200);
      }
    }, { passive: true });

    homeHeroEl.addEventListener('pointerleave', function() {
      if (lastHoverIndex >= 0 && swissCells[lastHoverIndex]) {
        swissCells[lastHoverIndex].el.classList.remove('is-hovered');
      }
      lastHoverIndex = -1;
    });
  }

  if ('IntersectionObserver' in window) {
    var heroObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        heroVisible = entry.isIntersecting;
        if (heroVisible) {
          startSwissLoop();
        } else {
          stopSwissLoop();
        }
      });
    }, { threshold: 0.05 });
    heroObserver.observe(homeHeroEl);
  } else {
    startSwissLoop();
  }

  window.addEventListener('resize', function() {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(buildSwissGrid, 180);
  }, { passive: true });

  buildSwissGrid();
  if (motionAllowed) {
    setTimeout(runSwissBeat, 700);
    startSwissLoop();
  }
}

// Beyond Words page: Sticky center phone screen switcher
var bwFeatures = document.querySelector('[data-bw-features]');

if (bwFeatures) {
  var bwScreens = Array.prototype.slice.call(bwFeatures.querySelectorAll('[data-bw-screen]'));
  var bwItems = Array.prototype.slice.call(bwFeatures.querySelectorAll('[data-bw-item]'));

  function setBwActive(targetIdx) {
    var clamped = Math.max(0, Math.min(bwScreens.length - 1, targetIdx));
    bwScreens.forEach(function(screen, i) {
      screen.classList.toggle('is-active', i === clamped);
    });
    bwItems.forEach(function(item) {
      var idx = parseInt(item.getAttribute('data-bw-item'), 10) || 0;
      item.classList.toggle('is-active', idx === clamped);
    });
  }

  if ('IntersectionObserver' in window && bwScreens.length > 1 && bwItems.length > 0) {
    var bwObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var idx = parseInt(entry.target.getAttribute('data-bw-item'), 10) || 0;
          setBwActive(idx);
        }
      });
    }, {
      rootMargin: '-38% 0px -38% 0px',
      threshold: 0.1
    });

    bwItems.forEach(function(item) {
      bwObserver.observe(item);
    });
  }
}
