// Autoplay robustness for background videos (iOS/low-power modes)
(function () {
  var videos = document.querySelectorAll('video');
  function tryPlay() {
    videos.forEach(function (v) {
      v.muted = true;
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    });
  }
  tryPlay();
  setInterval(tryPlay, 1000);
  document.addEventListener('click', tryPlay, { once: true });
  document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
})();

// Mobile menu
(function () {
  var btn = document.querySelector('.burger');
  var menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    var open = !menu.hidden;
    menu.hidden = open;
    btn.setAttribute('aria-expanded', String(!open));
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); });
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 700) { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
  });
})();
