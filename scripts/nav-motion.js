const navLinks = document.querySelector('.nav-links');

if (navLinks) {
  const links = [...navLinks.querySelectorAll('a:not(.cta)')];
  const page = location.pathname.split('/').pop() || 'index.html';
  const activeIndex = page === 'playground.html' ? 1 : page === 'about.html' ? 2 : page === 'contact.html' ? -1 : 0;
  const activeLink = links[activeIndex] || null;
  const indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  navLinks.prepend(indicator);

  links.forEach((link, index) => {
    if (index === activeIndex) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
    link.addEventListener('click', () => sessionStorage.setItem('nav-origin', `${page}:${index}`));
  });
  if (activeIndex === -1) navLinks.querySelector('.cta')?.setAttribute('aria-current', 'page');

  const place = (link, instant = false) => {
    if (!link) {
      indicator.style.opacity = '0';
      return;
    }
    if (instant) indicator.style.transition = 'none';
    const linkRect = link.getBoundingClientRect();
    const navRect = navLinks.getBoundingClientRect();
    indicator.style.width = `${linkRect.width}px`;
    indicator.style.height = `${linkRect.height}px`;
    indicator.style.transform = `translate(${linkRect.left - navRect.left}px, ${linkRect.top - navRect.top}px)`;
    indicator.style.opacity = '1';
    if (instant) requestAnimationFrame(() => { indicator.style.transition = ''; });
  };

  const origin = sessionStorage.getItem('nav-origin');
  sessionStorage.removeItem('nav-origin');
  const [originPage, originIndex] = origin ? origin.split(':') : [];
  if (activeLink && originPage !== page && links[Number(originIndex)]) {
    place(links[Number(originIndex)], true);
    requestAnimationFrame(() => requestAnimationFrame(() => place(activeLink)));
  } else {
    place(activeLink, true);
  }
  navLinks.classList.add('nav-motion-ready');
  links.forEach(link => {
    link.addEventListener('pointerenter', () => place(link));
    link.addEventListener('focus', () => place(link));
  });
  navLinks.querySelector('.cta')?.addEventListener('pointerenter', () => place(activeLink));
  navLinks.addEventListener('pointerleave', () => place(activeLink));
  navLinks.addEventListener('focusout', event => {
    if (!links.includes(event.relatedTarget)) place(activeLink);
  });
  window.addEventListener('resize', () => place(navLinks.querySelector('a:not(.cta):hover, a:not(.cta):focus') || activeLink, true));
}
