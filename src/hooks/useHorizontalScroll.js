import { useCallback, useEffect, useRef, useState } from 'react';

export function useHorizontalScroll() {
  const ref = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 1);
    setCanNext(max - el.scrollLeft > 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    update();
    const raf = requestAnimationFrame(update);

    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    const ro = new ResizeObserver(update);
    ro.observe(el);
    for (const child of el.children) ro.observe(child);

    const mo = new MutationObserver(() => {
      ro.disconnect();
      ro.observe(el);
      for (const child of el.children) ro.observe(child);
      update();
    });
    mo.observe(el, { childList: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      ro.disconnect();
      mo.disconnect();
    };
  }, [update]);

  const scrollBy = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.85, 320), behavior: 'smooth' });
  };

  return { ref, canPrev, canNext, scrollPrev: () => scrollBy(-1), scrollNext: () => scrollBy(1) };
}
