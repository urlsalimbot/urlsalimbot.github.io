export function reveal(node, { delay = 0 } = {}) {
  if (typeof IntersectionObserver === 'undefined') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  node.classList.add('reveal');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      node.style.transitionDelay = `${delay}ms`;
      node.classList.add('in');
      observer.disconnect();
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
