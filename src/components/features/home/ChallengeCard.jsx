import { Clock, Trophy } from 'lucide-react';

export default function ChallengeCard({ challenge, onPlay }) {
  return (
    <article className="flex shrink-0 w-[400px] gap-4 rounded-card border border-line bg-bg-card p-4">
      <button
        type="button"
        onClick={() => onPlay?.(challenge)}
        aria-label={`Play ${challenge.title}`}
        className="shrink-0 overflow-hidden rounded-lg"
      >
        <img
          src={challenge.cover}
          alt={challenge.title}
          className="h-[180px] w-[144px] object-cover"
        />
      </button>
      <div className="flex flex-1 flex-col justify-between min-w-0">
        <div>
          <h3 className="font-display text-lg font-bold leading-tight text-text">{challenge.title}</h3>
          <p className="mt-2 text-sm text-text-muted">{challenge.objective}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="inline-flex items-center gap-1.5 text-text-muted">
              <Trophy size={14} /> Prize:
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-text">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-gradient text-[10px] font-bold text-white">
                D1
              </span>
              {challenge.prize.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="inline-flex items-center gap-1.5 text-text-muted">
              <Clock size={14} /> Expires:
            </span>
            <span className="text-text">{challenge.expires}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
