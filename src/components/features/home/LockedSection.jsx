import { Lock, ArrowRight } from 'lucide-react';
import { useToast } from '@/context/ToastContext.jsx';

export default function LockedSection({ title, games }) {
  const { toast } = useToast();
  return (
    <section aria-label={title} className="space-y-4">
      <h2 className="section-title">{title}</h2>
      <div className="relative overflow-hidden rounded-card border border-line">
        <div className="flex gap-3 p-4 blur-md select-none pointer-events-none" aria-hidden="true">
          {games.map((g) => (
            <div key={g.id} className="shrink-0 w-[174px] aspect-[3/4] rounded-card overflow-hidden">
              <img src={g.cover} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 grid place-items-center bg-black/55">
          <div className="text-center space-y-3 px-6">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-bg-chip border border-line">
              <Lock size={20} className="text-accent-soft" />
            </div>
            <p className="font-display text-xl font-bold text-white">Proceed to the next level?</p>
            <div className="flex justify-center gap-2">
              <button
                type="button"
                onClick={() => toast('Welcome to the High Rollers Hideaway! (demo)')}
                className="btn-primary"
              >
                Yes <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => toast('Maybe later')}
                className="btn-secondary"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
