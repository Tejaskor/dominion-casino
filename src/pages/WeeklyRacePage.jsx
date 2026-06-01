import { useState } from 'react';
import CarouselSection from '@/components/features/home/CarouselSection.jsx';
import GameCard from '@/components/features/home/GameCard.jsx';
import ChallengeCard from '@/components/features/home/ChallengeCard.jsx';
import GameDetailModal from '@/components/features/home/GameDetailModal.jsx';
import { games, challenges } from '@/data/games.js';
import heroBanner from '@/assets/images/weekly-races/hero-banner.svg';
import avatar1 from '@/assets/images/weekly-races/avatar-1.svg';
import avatar2 from '@/assets/images/weekly-races/avatar-2.svg';
import avatar3 from '@/assets/images/weekly-races/avatar-3.svg';

const LEADERBOARD = [
  { rank: 1, name: 'BetKing007', wagered: 'XP 10,548.06', activity: '1 days ago', prize: '$800', avatar: avatar1 },
  { rank: 2, name: 'Thanos', wagered: 'XP 10,548.06', activity: '1 days ago', prize: '$800', avatar: avatar2 },
  { rank: 3, name: 'DrDOOM', wagered: 'XP 10,548.06', activity: '1 days ago', prize: '$800', avatar: avatar3 },
  { rank: 4, name: 'WinWanda', wagered: 'XP 10,548.06', activity: '1 days ago', prize: '$800', isYou: true },
  { rank: 5, name: 'Casinobot', wagered: 'XP 10,548.06', activity: '5 days ago', prize: '$800' },
  { rank: 6, name: 'GoldenGambler', wagered: 'XP 10,548.06', activity: '4 days ago', prize: '$800' },
  { rank: 7, name: 'TurboSlots', wagered: 'XP 10,548.06', activity: '8 days ago', prize: '$800' },
  { rank: 8, name: 'JackpotQueen', wagered: 'XP 10,548.06', activity: '7 days ago', prize: '$800' },
  { rank: 9, name: 'VegasVibes', wagered: 'XP 10,548.06', activity: '10 days ago', prize: '$800' },
  { rank: 10, name: 'Casinoboy', wagered: 'XP 10,548.06', activity: '10 days ago', prize: '$800' },
];

function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-[20px] min-h-[260px] sm:min-h-[300px] lg:h-[352px]">
      <img
        src={heroBanner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover select-none"
        draggable={false}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-[60%] w-[55%] rounded-tl-[20px] border-t-2 border-l-2 border-white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[60%] w-[55%] rounded-br-[20px] border-b-2 border-r-2 border-white"
      />

      <div className="relative h-full min-h-inherit flex items-center px-5 sm:px-8 lg:px-0 py-10 lg:py-0">
        <div className="lg:absolute lg:left-[69px] lg:top-1/2 lg:-translate-y-1/2 flex flex-col items-start gap-3 sm:gap-5 lg:gap-[26px] w-full sm:max-w-[60%] lg:w-[488px] lg:max-w-[calc(100%-90px)]">
          <h1 className="font-base-runner font-normal text-[36px] sm:text-[48px] lg:text-[64px] leading-tight lg:leading-normal capitalize text-white">
            High Rollers Hideaway
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 lg:gap-[11px]">
            <span className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-white whitespace-nowrap">
              VIP Games
            </span>
            <span className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] lg:h-[10px] lg:w-[10px] rounded-full bg-promo-red" />
            <span className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-white whitespace-nowrap">
              Private Challenges
            </span>
            <span className="h-[6px] w-[6px] sm:h-[8px] sm:w-[8px] lg:h-[10px] lg:w-[10px] rounded-full bg-promo-red" />
            <span className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-white whitespace-nowrap">
              Higher Limits
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RankCell({ rank, avatar, isYou }) {
  if (rank <= 3 && avatar) {
    return (
      <div className="flex items-center justify-center">
        <img
          src={avatar}
          alt=""
          className="h-10 w-10 rounded-full object-cover select-none ring-2 ring-bg-card"
          draggable={false}
        />
      </div>
    );
  }
  return (
    <div className="relative flex items-center justify-center">
      {isYou && (
        <span className="absolute left-0 -translate-x-[140%] inline-flex items-center rounded-md bg-promo-red/20 border border-promo-red/40 px-2 py-0.5 text-xs font-bold text-promo-red">
          You
        </span>
      )}
      <span className="text-text-muted text-base">#{rank}</span>
    </div>
  );
}

function LeaderboardTable() {
  return (
    <section className="space-y-4">
      <h2 className="text-[24px] md:text-[26px] font-bold text-white">Exclusive Leaderboard</h2>

      <div className="overflow-hidden rounded-card bg-[#0A0A0A]">
        <div className="grid grid-cols-[120px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-center border-b border-[#232325] px-5 py-3.5">
          <div className="text-text-muted text-sm">Rank</div>
          <div className="text-text-muted text-sm">Name</div>
          <div className="text-text-muted text-sm">Wagered</div>
          <div className="text-text-muted text-sm">Activity</div>
          <div className="text-text-muted text-sm">Prize</div>
        </div>

        {LEADERBOARD.map((row, i) => {
          const isHighlighted = i % 2 === 1;
          return (
            <div
              key={row.rank}
              className={[
                'grid grid-cols-[120px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-center min-h-[56px] px-5 relative',
                isHighlighted ? 'bg-[#131314]' : '',
                row.isYou ? 'border-l-2 border-promo-red' : '',
              ].join(' ')}
            >
              <RankCell rank={row.rank} avatar={row.avatar} isYou={row.isYou} />
              <div className="text-white text-base font-medium">{row.name}</div>
              <div className="text-white text-sm">{row.wagered}</div>
              <div className="text-text-muted text-sm">{row.activity}</div>
              <div className="text-white text-sm font-medium">{row.prize}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function WeeklyRacePage() {
  const [selectedGame, setSelectedGame] = useState(null);

  const vipGames = games.slice(0, 10);
  const activeChallenges = challenges.slice(0, 3);

  return (
    <div className="space-y-10">
      <HeroBanner />

      <CarouselSection title="VIP Games">
        {vipGames.map((g, i) => (
          <GameCard
            key={`vip-${g.id}-${i}`}
            game={g}
            onPlay={setSelectedGame}
            className="snap-start"
          />
        ))}
      </CarouselSection>

      <CarouselSection title="Active Challenges">
        {activeChallenges.map((c) => (
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

      <LeaderboardTable />

      <GameDetailModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}
