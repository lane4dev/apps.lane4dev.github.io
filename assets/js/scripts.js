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
