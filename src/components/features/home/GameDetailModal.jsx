import { Heart, Play, Star, Tag } from 'lucide-react';
import Modal from '@/components/common/Modal.jsx';
import { useLibrary } from '@/context/LibraryContext.jsx';
import { useToast } from '@/context/ToastContext.jsx';

export default function GameDetailModal({ game, onClose }) {
  const { isWishlisted, isOwned, toggleWishlist, toggleOwned } = useLibrary();
  const { toast } = useToast();
  const open = Boolean(game);

  if (!open) return null;

  const wished = isWishlisted(game.id);
  const owned = isOwned(game.id);

  return (
    <Modal open={open} onClose={onClose} title={game.title}>
      <div className="flex flex-col gap-4 sm:flex-row">
        <img
          src={game.cover}
          alt={game.title}
          className="h-48 w-36 shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="chip">
              <Tag size={12} /> {game.genre}
            </span>
            <span className="chip">
              <Star size={12} className="text-gold" fill="currentColor" /> {game.rating}
            </span>
            <span className="chip">{game.provider}</span>
          </div>
          <p className="text-sm text-text-muted">
            Dive into <span className="text-text font-medium">{game.title}</span>. Featuring
            high-volatility wins, immersive visuals, and bonus rounds that keep the action going.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                toast(`Launching ${game.title}…`);
                onClose();
              }}
              className="btn-primary"
            >
              <Play size={14} fill="currentColor" /> Play now
            </button>
            <button
              type="button"
              onClick={() => {
                toggleWishlist(game.id);
                toast(wished ? 'Removed from wishlist' : 'Added to wishlist');
              }}
              className="btn-secondary"
              aria-pressed={wished}
            >
              <Heart size={14} fill={wished ? 'currentColor' : 'none'} />
              {wished ? 'Wishlisted' : 'Add to wishlist'}
            </button>
            <button
              type="button"
              onClick={() => {
                toggleOwned(game.id);
                toast(owned ? 'Removed from library' : 'Added to library');
              }}
              className="btn-ghost"
              aria-pressed={owned}
            >
              {owned ? 'In your library' : 'Add to library'}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
