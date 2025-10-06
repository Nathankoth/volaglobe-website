// Safety helper - compute nav height and set css variable
(function() {
  const nav = document.querySelector('.navbar');
  const root = document.documentElement;
  
  function setNav() {
    if (!nav) {
      root.style.setProperty('--site-nav-height', '72px');
      return;
    }
    const h = Math.ceil(nav.getBoundingClientRect().height) || 72;
    root.style.setProperty('--site-nav-height', h + 'px');
  }
  
  window.addEventListener('load', setNav);
  window.addEventListener('resize', setNav);
  setNav();
})();
