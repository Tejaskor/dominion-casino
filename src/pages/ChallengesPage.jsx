import { useState } from 'react';
import ChallengeCard from '@/components/features/home/ChallengeCard.jsx';
import GameDetailModal from '@/components/features/home/GameDetailModal.jsx';
import { challenges, games } from '@/data/games.js';

export default function ChallengesPage() {
  const [selectedGame, setSelectedGame] = useState(null);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="section-title">Active Challenges</h1>
        <p className="mt-1 text-sm text-text-muted">
          Compete for prizes in time-limited challenges across our top games.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {challenges.concat(challenges).map((c, i) => (
          <ChallengeCard
            key={`${c.id}-${i}`}
            challenge={c}
            onPlay={() => {
              const g = games.find((x) => x.title === c.title) || games[0];
              setSelectedGame(g);
            }}
          />
        ))}
      </div>
      <GameDetailModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}
