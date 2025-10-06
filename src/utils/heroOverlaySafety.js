// Hero overlay safety - ensure header doesn't hide hero headline
(function() {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero__inner') || document.querySelector('.hero');
  
  function setPadding() {
    if (!header || !hero) return;
    const h = header.getBoundingClientRect().height;
    hero.style.paddingTop = (h + 18) + 'px';
  }
  
  window.addEventListener('load', setPadding);
  window.addEventListener('resize', setPadding);
  setPadding();
})();
