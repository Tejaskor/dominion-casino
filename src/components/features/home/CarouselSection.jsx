import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll.js';

export default function CarouselSection({ title, children, viewAllHref, onViewAll }) {
  const { ref, canPrev, canNext, scrollPrev, scrollNext } = useHorizontalScroll();

  return (
    <section aria-label={title} className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <h2 className="section-title">{title}</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-bg-chip border border-line text-text-muted hover:text-text hover:bg-bg-elevated disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label={`Scroll ${title} left`}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-gradient text-white disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label={`Scroll ${title} right`}
          >
            <ChevronRight size={16} />
          </button>
          <button
            type="button"
            onClick={onViewAll}
            className="hidden md:inline-flex chip hover:text-text hover:bg-bg-elevated"
            aria-label={`View all in ${title}`}
          >
            View all
          </button>
        </div>
      </div>
      <div ref={ref} className="scroll-row">
        {children}
      </div>
    </section>
  );
}
