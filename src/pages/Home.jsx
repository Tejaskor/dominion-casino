import { useMemo, useState } from 'react';
import PromoBanner from '@/components/features/home/PromoBanner.jsx';
import HomeTabs from '@/components/features/home/HomeTabs.jsx';
import CarouselSection from '@/components/features/home/CarouselSection.jsx';
import GameCard from '@/components/features/home/GameCard.jsx';
import ChallengeCard from '@/components/features/home/ChallengeCard.jsx';
import ProviderStrip from '@/components/features/home/ProviderStrip.jsx';
import LockedSection from '@/components/features/home/LockedSection.jsx';
import GameDetailModal from '@/components/features/home/GameDetailModal.jsx';
import { games, challenges, getGamesByTag } from '@/data/games.js';
import { useSearch } from '@/context/SearchContext.jsx';

const SECTIONS = [
  { key: 'originals', title: 'Div 1 Originals', tag: 'originals' },
  { key: 'trending', title: 'Trending Games', tag: 'trending' },
];

const POST_CHALLENGE_SECTIONS = [
  { key: 'high-vol', title: 'High Volatility', tag: 'high-volatility' },
  { key: 'top-picks', title: 'Top Picks for CasinoKing', tag: 'top-picks' },
  { key: 'late-night', title: 'Late Night Chill', tag: 'late-night' },
];

export default function Home() {
  const { query } = useSearch();
  const [selectedGame, setSelectedGame] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return games.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.genre.toLowerCase().includes(q) ||
        g.provider.toLowerCase().includes(q),
    );
  }, [query]);

  const continueGames = useMemo(() => games.slice(0, 10), []);

  return (
    <div className="space-y-10">
      <PromoBanner onPlay={() => setSelectedGame(games[0])} />
      <HomeTabs />

      {filtered ? (
        <CarouselSection title={`Search results (${filtered.length})`}>
          {filtered.length === 0 ? (
            <div className="w-full text-sm text-text-muted py-6">
              No games match "{query}". Try a different search term.
            </div>
          ) : (
            filtered.map((g) => (
              <GameCard key={g.id} game={g} onPlay={setSelectedGame} className="snap-start" />
            ))
          )}
        </CarouselSection>
      ) : (
        <>
          {SECTIONS.map((s) => {
            const list = getGamesByTag(s.tag).concat(games).slice(0, 10);
            return (
              <CarouselSection key={s.key} title={s.title}>
                {list.map((g, i) => (
                  <GameCard
                    key={`${s.key}-${g.id}-${i}`}
                    game={g}
                    onPlay={setSelectedGame}
                    className="snap-start"
                  />
                ))}
              </CarouselSection>
            );
          })}

          <CarouselSection title="Continue Where You Left Off">
            {continueGames.map((g, i) => (
              <GameCard
                key={`cont-${g.id}-${i}`}
                game={g}
                caption={g.lastPlayed}
                onPlay={setSelectedGame}
                className="snap-start"
              />
            ))}
          </CarouselSection>

          <CarouselSection title="Active Challenges">
            {challenges.map((c) => (
              <ChallengeCard
                key={c.id}
                challenge={c}
                onPlay={() => {
                  const g = games.find((x) => x.title === c.title) || games[0];
                  setSelectedGame(g);
                }}
              />
            ))}
          </CarouselSection>

          {POST_CHALLENGE_SECTIONS.map((s) => {
            const list = getGamesByTag(s.tag).concat(games).slice(0, 10);
            return (
              <CarouselSection key={s.key} title={s.title}>
                {list.map((g, i) => (
                  <GameCard
                    key={`${s.key}-${g.id}-${i}`}
                    game={g}
                    onPlay={setSelectedGame}
                    className="snap-start"
                  />
                ))}
              </CarouselSection>
            );
          })}

          <ProviderStrip />

          <LockedSection title="High Rollers Hideaway" games={games.slice(0, 8)} />
        </>
      )}

      <GameDetailModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}
