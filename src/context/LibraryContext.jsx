import { createContext, useCallback, useContext, useMemo } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage.js';
import { games as seedGames } from '@/data/games.js';

const LibraryContext = createContext(null);

export function LibraryProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage('dominion.wishlist', []);
  const [owned, setOwned] = useLocalStorage(
    'dominion.owned',
    seedGames.filter((g) => g.isOwned).map((g) => g.id),
  );

  const toggleWishlist = useCallback(
    (id) =>
      setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    [setWishlist],
  );

  const toggleOwned = useCallback(
    (id) =>
      setOwned((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    [setOwned],
  );

  const value = useMemo(
    () => ({
      wishlist,
      owned,
      isWishlisted: (id) => wishlist.includes(id),
      isOwned: (id) => owned.includes(id),
      toggleWishlist,
      toggleOwned,
    }),
    [wishlist, owned, toggleWishlist, toggleOwned],
  );

  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
}

export function useLibrary() {
  const ctx = useContext(LibraryContext);
  if (!ctx) throw new Error('useLibrary must be used within LibraryProvider');
  return ctx;
}
