// ensure hero padding so hero text doesn't get hidden behind overlay
(function() {
  const header = document.querySelector('.header-overlay');
  const heroInner = document.querySelector('.hero__inner') || document.querySelector('.hero');
  
  function applyPadding() {
    if (!header || !heroInner) return;
    const h = header.getBoundingClientRect().height;
    heroInner.style.paddingTop = (h + 18) + 'px';
  }
  
  window.addEventListener('load', applyPadding);
  window.addEventListener('resize', applyPadding);
  applyPadding();
})();
