const caseMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Native tab buttons retain click behavior and gain standard keyboard navigation.
const insightTabs = [...document.querySelectorAll('[role="tab"]')];
insightTabs.forEach((tab, index) => {
  tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % insightTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + insightTabs.length) % insightTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = insightTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    insightTabs[next].click();
    insightTabs[next].focus();
  });
});

// Headings introduce each chapter without hiding the long-form content.
if (window.gsap) gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', context => {
  context.add('reveal', heading => gsap.from(heading, {
    y: 24, opacity: 0.45, duration: 0.65, ease: 'power2.out', clearProps: 'transform,opacity'
  }));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    context.reveal(entry.target);
  }), { threshold: 0.4 });
  document.querySelectorAll('.section > h2').forEach(heading => observer.observe(heading));
  return () => observer.disconnect();
});

// Two independent before/after rate comparisons; all values remain visible in HTML.
if (window.d3) document.querySelectorAll('.impact-chart').forEach((figure, index) => {
  const before = Number(figure.dataset.before);
  const after = Number(figure.dataset.after);
  const maximum = Number(figure.dataset.max);
  const data = [{ label: 'Before', value: before }, { label: 'After', value: after }];
  const svg = d3.select(figure).append('svg').attr('role', 'img')
    .attr('aria-labelledby', `impact-chart-title-${index}`);
  svg.append('title').attr('id', `impact-chart-title-${index}`)
    .text(`${figure.dataset.label}: before ${before}%, after ${after}%. Scale: 0 to ${maximum}%.`);
  const plot = svg.append('g');
  const replay = document.createElement('button');
  replay.type = 'button';
  replay.className = 'impact-chart-replay';
  replay.textContent = 'Replay comparison';
  replay.setAttribute('aria-label', `Replay ${figure.dataset.label} comparison`);
  figure.append(replay);
  let seen = false;
  let lastWidth = figure.clientWidth;

  function draw(animate = false) {
    const width = figure.clientWidth;
    const scale = d3.scaleLinear().domain([0, maximum]).range([64, width - 44]);
    svg.attr('viewBox', `0 0 ${width} 140`).attr('height', 140);
    plot.selectAll('*').interrupt();
    plot.selectAll('*').remove();
    plot.append('g').attr('transform', 'translate(0,110)')
      .call(d3.axisBottom(scale).tickValues([0, maximum / 2, maximum]).tickFormat(value => `${value}%`));
    const rows = plot.selectAll('.rate-row').data(data).join('g')
      .attr('class', 'rate-row').attr('transform', (_, i) => `translate(0,${20 + i * 44})`);
    rows.append('text').attr('x', 0).attr('y', 17).text(d => d.label);
    const bars = rows.append('rect').attr('x', scale(0)).attr('height', 24).attr('rx', 3)
      .attr('class', (_, i) => i ? `after-bar ${figure.dataset.color}` : 'before-bar')
      .attr('width', d => animate ? 0 : scale(d.value) - scale(0));
    rows.append('text').attr('class', 'chart-value').attr('x', d => scale(d.value) + 7)
      .attr('y', 17).text(d => `${d.value}%`);
    if (animate) bars.transition().delay((_, i) => i * 160).duration(850)
      .ease(d3.easeCubicOut).attr('width', d => scale(d.value) - scale(0));
  }

  replay.addEventListener('click', () => draw(!caseMotion.matches));
  caseMotion.addEventListener('change', () => draw(false));
  new ResizeObserver(() => {
    if (figure.clientWidth === lastWidth) return;
    lastWidth = figure.clientWidth;
    draw(false);
  }).observe(figure);
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting || seen) return;
    seen = true;
    draw(!caseMotion.matches);
    observer.disconnect();
  }, { threshold: 0.6 });
  draw(false);
  observer.observe(figure);
});
