// Keep the normal list as the no-JS and reduced-motion experience.
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  const list = document.querySelector('.playground-list, .featured-list');
  const items = [...list.children];
  const cards = items.map(item => item.querySelector('.playground-card, .featured-card'));
  const isFeatured = list.matches('.featured-list');

  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    if (isFeatured) {
      const section = list.closest('.works');
      gsap.fromTo(section, { opacity: 0 }, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top 96%', end: 'top 72%', scrub: true }
      });
    }
    gsap.set(items, { zIndex: index => items.length - index });
    gsap.set(cards, { transformOrigin: 'center top' });
    const unfold = gsap.fromTo(cards, {
      y: index => items[0].offsetTop - items[index].offsetTop + index * (isFeatured ? 80 : 28),
      scale: index => Math.max(0.88, 1 - index * (isFeatured ? 0.04 : 0.035))
    }, {
      y: 0, scale: 1, ease: 'power3.out',
      scrollTrigger: {
        trigger: list,
        start: isFeatured ? 'top 48%' : list.closest('.projects') ? 'top 80%' : 0,
        end: isFeatured ? '+=560' : list.closest('.projects') ? '+=390' : 390,
        scrub: true,
        invalidateOnRefresh: true
      }
    });
    // Future project links remain reachable without navigating a covered card.
    const showFocusedCard = event => {
      if (!event.target.matches(':focus-visible')) return;
      unfold.scrollTrigger.kill();
      unfold.progress(1);
    };
    list.addEventListener('focusin', showFocusedCard);
    return () => list.removeEventListener('focusin', showFocusedCard);
  });
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
