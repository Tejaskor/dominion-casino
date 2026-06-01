import { useState, useEffect, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import podiumBg from '@/assets/images/leaderboard/podium-bg.png';

const TOP_PLAYERS = [
  { place: '2nd', name: 'Casinobot', baseXp: 20026.07, prize: 2040, position: 'left' },
  { place: '1st', name: 'Goldgambler', baseXp: 38216.07, prize: 4154, position: 'center' },
  { place: '3rd', name: 'WinWanda', baseXp: 12416.07, prize: 1154, position: 'right' },
];

const LEADERBOARD = [
  { rank: 4, name: 'WinWanda', wagered: 'XP 10,548.06', activity: '1 days ago', prize: '$800', isYou: false },
  { rank: 5, name: 'Casinobot', wagered: 'XP 10,548.06', activity: '5 days ago', prize: '$800', isYou: true },
  { rank: 6, name: 'GoldenGambler', wagered: 'XP 10,548.06', activity: '4 days ago', prize: '$800', isYou: false },
  { rank: 7, name: 'TurboSlots', wagered: 'XP 10,548.06', activity: '8 days ago', prize: '$800', isYou: false },
  { rank: 8, name: 'JackpotQueen', wagered: 'XP 10,548.06', activity: '7 days ago', prize: '$800', isYou: false },
  { rank: 9, name: 'VegasVibes', wagered: 'XP 10,548.06', activity: '10 days ago', prize: '$800', isYou: false },
  { rank: 10, name: 'Casinoboy', wagered: 'XP 10,548.06', activity: '10 days ago', prize: '$800', isYou: false },
];

function formatNumber(n) {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function PodiumStat({ place, name, position, liveXp, livePrize }) {
  // Positions derived from Figma coords (hero is 1129×848):
  // 1st text frame: x=517 (center 51%) y=380 (top 45%) — purple podium
  // 2nd text frame: x=319 (center 34%) y=455 (top 54%) — red podium
  // 3rd text frame: x=712 (center 68%) y=465 (top 55%) — blue podium
  const positionClass = {
    left: 'left-[34%] top-[54%]',
    center: 'left-[51%] top-[45%]',
    right: 'left-[68%] top-[55%]',
  }[position];

  const isFirst = place === '1st';
  const placeSize = isFirst
    ? 'text-[48px] md:text-[60px] lg:text-[64px]'
    : 'text-[36px] md:text-[44px] lg:text-[48px]';
  const prizeSize = isFirst
    ? 'text-[20px] md:text-[24px]'
    : 'text-[18px] md:text-[22px]';

  return (
    <div
      className={`absolute ${positionClass} -translate-x-1/2 flex flex-col items-center gap-3 md:gap-5 text-white text-center pointer-events-none w-[120px] md:w-[140px]`}
    >
      <h3
        className={`${placeSize} font-bold leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]`}
      >
        {place}
      </h3>

      <div className="flex flex-col items-center gap-2 md:gap-3 w-full">
        <p className="text-[12px] md:text-[14px] font-medium text-white capitalize">
          XP WAGERED
        </p>

        <div className="relative inline-flex items-center justify-center gap-1.5 rounded-full bg-[rgba(35,35,37,0.4)] backdrop-blur-sm px-3.5 py-2 w-full shadow-[inset_0_-4px_4px_rgba(0,0,0,0.1),inset_0_4px_4px_rgba(0,0,0,0.1)] border border-white/5">
          <span className="text-[12px] md:text-[14px] font-medium text-[#15FF00] capitalize">
            XP
          </span>
          <span className="text-[12px] md:text-[14px] font-medium text-white tabular-nums whitespace-nowrap">
            {formatNumber(liveXp)}
          </span>
        </div>
      </div>

      <p className={`${prizeSize} font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]`}>
        ${Math.round(livePrize).toLocaleString()}
      </p>
      <span className="sr-only">{name}</span>
    </div>
  );
}

function useLiveTopStats() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1200);
    return () => clearInterval(id);
  }, []);

  return useMemo(() => {
    return TOP_PLAYERS.map((p) => {
      const jitter = Math.sin(tick * 0.5 + p.baseXp * 0.0001) * 4 + tick * 0.13;
      const prizeJitter = Math.sin(tick * 0.7 + p.prize * 0.001) * 2 + tick * 0.05;
      return {
        ...p,
        liveXp: +(p.baseXp + jitter).toFixed(2),
        livePrize: p.prize + prizeJitter,
      };
    });
  }, [tick]);
}

function useCountdown(initialSeconds) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : initialSeconds));
    }, 1000);
    return () => clearInterval(id);
  }, [initialSeconds]);

  const days = Math.floor(seconds / 86400);
  const hrs = Math.floor((seconds % 86400) / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;

  return { days, hrs, min, sec };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center w-12 md:w-[50px]">
      <span className="text-[22px] md:text-[26px] font-extrabold text-white tabular-nums leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-[12px] md:text-[14px] font-medium text-text-muted leading-none">
        {label}
      </span>
    </div>
  );
}

function HeroSection() {
  const liveStats = useLiveTopStats();
  const { days, hrs, min, sec } = useCountdown(4 * 86400 + 12 * 3600 + 36 * 60 + 3);

  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-12 h-[300px]"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(123, 47, 247, 0.45) 0%, rgba(94, 23, 173, 0.18) 35%, transparent 70%)',
        }}
      />

      <div className="relative w-full overflow-hidden rounded-card">
        <div
          className="relative w-full"
          style={{ aspectRatio: '1129 / 848' }}
        >
          <img
            src={podiumBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover select-none"
            draggable={false}
          />

          {liveStats.map((p) => (
            <PodiumStat key={p.place} {...p} />
          ))}

          <div className="absolute inset-x-0 bottom-[10%] flex flex-col items-center px-4 z-10">
            <div className="flex items-baseline gap-3 md:gap-5">
              <CountdownUnit value={days} label="Days" />
              <CountdownUnit value={hrs} label="Hrs" />
              <CountdownUnit value={min} label="Min" />
              <CountdownUnit value={sec} label="sec" />
            </div>
            <p className="mt-4 text-[13px] md:text-base font-medium text-white/85 text-center">
              Leaderboard updates every 30-60 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeaderboardTable() {
  return (
    <section>
      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-[120px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-center border-b border-[#232325] px-5 h-14">
            <div className="text-text-muted text-sm">Rank</div>
            <div className="text-text-muted text-sm">Name</div>
            <div className="text-text-muted text-sm">Wagered</div>
            <div className="text-text-muted text-sm">Activity</div>
            <div className="text-text-muted text-sm">Prize</div>
          </div>

          {LEADERBOARD.map((row) => (
            <div
              key={row.rank}
              className={[
                'relative grid grid-cols-[120px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-center min-h-[56px] px-5 transition-colors',
                row.isYou ? 'bg-promo-red/10' : 'hover:bg-[#131314]',
              ].join(' ')}
            >
              {row.isYou && (
                <span className="absolute -left-1 top-1/2 -translate-x-full -translate-y-1/2 inline-flex items-center rounded-md bg-promo-red px-2 py-0.5 text-xs font-bold text-white shadow">
                  You
                </span>
              )}
              {row.isYou && (
                <span aria-hidden="true" className="absolute left-0 top-0 h-full w-[3px] bg-promo-red" />
              )}
              <div className="text-text-muted text-base">#{row.rank}</div>
              <div className="text-white text-base font-medium">{row.name}</div>
              <div className="text-white text-sm tabular-nums">{row.wagered}</div>
              <div className="text-text-muted text-sm">{row.activity}</div>
              <div className="text-white text-sm font-medium">{row.prize}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LeaderboardPage() {
  const navigate = useNavigate();

  return (
    <div className="-mx-4 md:-mx-6 lg:-mx-8 -mt-6">
      <section className="relative">
        <HeroSection />

        <header className="absolute top-6 md:top-8 left-4 md:left-8 lg:left-10 z-20 flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white hover:bg-black/60 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="font-display text-2xl md:text-[28px] font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Leaderboard
          </h1>
        </header>
      </section>

      <div className="px-4 md:px-6 lg:px-8 pt-8 pb-10">
        <LeaderboardTable />
      </div>
    </div>
  );
}
