// Keep content visible and controls usable even if GSAP is unavailable.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (window.gsap) {
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', context => {
    context.add('reveal', cards => gsap.from(cards, {
      y: 40, opacity: 0.2, duration: 0.55, stagger: 0.08,
      ease: 'power2.out', clearProps: 'transform,opacity'
    }));
    const observer = new IntersectionObserver(entries => {
      const cards = entries.filter(entry => entry.isIntersecting).map(entry => entry.target);
      if (!cards.length) return;
      cards.forEach(card => observer.unobserve(card));
      context.reveal(cards);
    }, { threshold: 0.2 });
    document.querySelectorAll('.work-card').forEach(card => observer.observe(card));
    return () => observer.disconnect();
  });
}


// Shared critically damped spring preserves velocity when its target changes.
function createInteractionSpring(paint) {
  let position = 0, velocity = 0, target = 0, frame = null, previousTime = 0;
  const tick = time => {
    const dt = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    const displacement = position - target;
    const coefficient = velocity + 22 * displacement;
    const decay = Math.exp(-22 * dt);
    position = target + (displacement + coefficient * dt) * decay;
    velocity = (velocity - 22 * coefficient * dt) * decay;
    if (Math.abs(position - target) < 0.001 && Math.abs(velocity) < 0.001) {
      position = target;
      velocity = 0;
      frame = null;
      paint(position);
      return;
    }
    paint(position);
    frame = requestAnimationFrame(tick);
  };
  return (next, instant = false) => {
    target = next;
    if (instant) {
      cancelAnimationFrame(frame);
      frame = null;
      position = target;
      velocity = 0;
      paint(position);
    } else if (frame === null) {
      previousTime = performance.now();
      frame = requestAnimationFrame(tick);
    }
  };
}

const hoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
document.querySelectorAll('.work-card, .playground-card').forEach(card => {
  let hovered = false;
  const spring = createInteractionSpring(value => card.style.setProperty('--engagement', value));
  const update = () => {
    const target = (hovered && hoverPointer.matches) || card.matches(':focus-within') ? 1 : 0;
    spring(reducedMotion.matches ? 0 : target, reducedMotion.matches || document.hidden);
  };
  card.classList.add('motion-ready');
  card.addEventListener('pointerenter', event => { hovered = event.pointerType !== 'touch'; update(); });
  card.addEventListener('pointerleave', () => { hovered = false; update(); });
  card.addEventListener('pointercancel', () => { hovered = false; update(); });
  card.addEventListener('focus', update);
  card.addEventListener('blur', update);
  card.addEventListener('focusin', update);
  card.addEventListener('focusout', update);
  reducedMotion.addEventListener('change', update);
  hoverPointer.addEventListener('change', update);
  document.addEventListener('visibilitychange', update);
});

document.querySelectorAll('.interest-card').forEach(card => {
  const inner = card.querySelector('.interest-card-inner');
  const front = card.querySelector('.interest-card-front');
  const back = card.querySelector('.interest-card-back');
  const label = card.getAttribute('aria-label');
  inner.style.transition = 'none';
  const flip = createInteractionSpring(value => {
    inner.style.transform = `rotateY(${value * 180}deg)`;
  });
  const render = () => {
    const flipped = card.classList.contains('flipped');
    card.setAttribute('aria-pressed', String(flipped));
    card.setAttribute('aria-label', flipped ? label.replace(/show .+$/, 'show description') : label);
    front.setAttribute('aria-hidden', String(flipped));
    back.setAttribute('aria-hidden', String(!flipped));
    flip(flipped ? 1 : 0, reducedMotion.matches || document.hidden);
  };
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    render();
  });
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (event.key === 'Enter' && !event.repeat) card.click();
    }
    if (event.key === 'Escape') {
      card.classList.remove('flipped');
      render();
    }
  });
  card.addEventListener('keyup', event => {
    if (event.key === ' ') { event.preventDefault(); card.click(); }
  });
  document.addEventListener('visibilitychange', render);
  reducedMotion.addEventListener('change', render);
});
