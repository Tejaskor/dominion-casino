import { Play, Heart, Star } from 'lucide-react';
import { useLibrary } from '@/context/LibraryContext.jsx';
import { useToast } from '@/context/ToastContext.jsx';

export default function GameCard({ game, caption, onPlay, className = '' }) {
  const { isWishlisted, toggleWishlist } = useLibrary();
  const { toast } = useToast();
  const wished = isWishlisted(game.id);

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(game.id);
    toast(wished ? `Removed ${game.title} from wishlist` : `Added ${game.title} to wishlist`);
  };

  return (
    <div className={`relative shrink-0 ${className}`}>
      <button
        type="button"
        onClick={() => onPlay?.(game)}
        aria-label={`Play ${game.title}`}
        className="group relative block w-[164px] md:w-[174px] overflow-hidden rounded-card bg-bg-card focus-visible:ring-2 focus-visible:ring-accent-soft"
      >
        <div className="relative aspect-[3/4] w-full">
          <img
            src={game.cover}
            alt={game.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
          {game.isNew && (
            <span className="absolute left-2 top-2 rounded-full bg-accent-gradient px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
              New
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/0 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-3 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="text-left">
              <div className="text-sm font-semibold text-white line-clamp-1">{game.title}</div>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-white/75">
                <Star size={12} className="text-gold" fill="currentColor" />
                {game.rating}
              </div>
            </div>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-gradient text-white shadow-glow">
              <Play size={14} fill="currentColor" />
            </span>
          </div>
        </div>
      </button>

      <button
        type="button"
        onClick={handleWishlist}
        aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
        aria-pressed={wished}
        className={[
          'absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full backdrop-blur transition-colors',
          wished
            ? 'bg-accent text-white'
            : 'bg-black/45 text-white hover:bg-black/65',
        ].join(' ')}
      >
        <Heart size={14} fill={wished ? 'currentColor' : 'none'} />
      </button>

      {caption && (
        <div className="mt-2 px-1 text-xs text-text-muted">Played {caption}</div>
      )}
    </div>
  );
}
