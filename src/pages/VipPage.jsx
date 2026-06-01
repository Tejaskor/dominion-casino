import { useState } from 'react';
import { Lock, Crown, Gift, ChevronDown, Check } from 'lucide-react';
import heroVideo from '@/assets/images/vip/hero-character.mp4';
import heroBronze from '@/assets/images/vip/hero-bronze.svg';
import rewardInstant from '@/assets/images/vip/reward-instant.svg';
import rewardDaily from '@/assets/images/vip/reward-daily.svg';
import rewardWeekly from '@/assets/images/vip/reward-weekly.svg';
import rewardMonthly from '@/assets/images/vip/reward-monthly.svg';
import frameWood from '@/assets/images/vip/frame-wood.svg';
import frameBronze from '@/assets/images/vip/frame-bronze.svg';

const NEXT_RANKS = [
  { name: 'Bronze III', status: 'active', xp: 'XP 200,000', pct: '0%' },
  { name: 'Bronze IV', status: 'locked', xp: 'XP 200,000', pct: '0%' },
  { name: 'Bronze V', status: 'locked', xp: 'XP 200,000', pct: '0%' },
];

const REWARDS = [
  {
    id: 'instant',
    img: rewardInstant,
    title: 'Instant Reward',
    action: { label: 'Claim', kind: 'primary' },
    glow: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255, 80, 50, 0.55) 0%, rgba(224, 54, 27, 0.25) 35%, transparent 70%)',
  },
  {
    id: 'daily',
    img: rewardDaily,
    title: 'Daily Reward',
    action: { label: 'Bronze 1', kind: 'locked' },
    glow: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255, 170, 60, 0.55) 0%, rgba(255, 122, 26, 0.25) 35%, transparent 70%)',
  },
  {
    id: 'weekly',
    img: rewardWeekly,
    title: 'Weekly Reward',
    action: { label: 'Bronze 1', kind: 'locked' },
    glow: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(155, 80, 230, 0.55) 0%, rgba(119, 23, 255, 0.25) 35%, transparent 70%)',
  },
  {
    id: 'monthly',
    img: rewardMonthly,
    title: 'Monthly Reward',
    action: { label: 'Silver 1', kind: 'locked' },
    glow: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(80, 140, 255, 0.55) 0%, rgba(40, 90, 220, 0.25) 35%, transparent 70%)',
  },
];

const VIP_LEVELS = [
  {
    tier: 'Base Level',
    name: 'Sprite',
    frame: frameWood,
    status: 'completed',
    accent: 'from-emerald-500/40 via-emerald-700/15 to-transparent',
  },
  {
    tier: 'Bronze Tier',
    name: 'Griffin',
    frame: frameBronze,
    status: 'active',
    accent: 'from-[#FF7A1A]/55 via-[#7A1A1F]/25 to-transparent',
  },
  {
    tier: 'Silver Tier',
    name: 'Chimera',
    frame: frameBronze,
    status: 'locked',
    accent: 'from-slate-300/30 via-slate-600/10 to-transparent',
  },
  {
    tier: 'Gold Tier',
    name: 'Phoenix',
    frame: frameWood,
    status: 'locked',
    accent: 'from-amber-400/30 via-amber-700/10 to-transparent',
  },
  {
    tier: 'Platinum Tier',
    name: 'Dragon',
    frame: frameBronze,
    status: 'locked',
    accent: 'from-cyan-300/30 via-cyan-700/10 to-transparent',
  },
  {
    tier: 'Diamond Tier',
    name: 'Behemoth',
    frame: frameWood,
    status: 'locked',
    accent: 'from-sky-300/30 via-blue-700/10 to-transparent',
  },
  {
    tier: 'VIP Tier',
    name: 'Celestial',
    frame: frameBronze,
    status: 'locked',
    accent: 'from-violet-400/30 via-violet-700/10 to-transparent',
  },
];

const TIER_TABLES = {
  Bronze: [
    { level: 'Bronze I', xp: '65,000', bonus: '$25' },
    { level: 'Bronze II', xp: '80,000', bonus: '$25' },
    { level: 'Bronze III', xp: '100,000', bonus: '$40' },
    { level: 'Bronze IV', xp: '150,000', bonus: '$40' },
    { level: 'Bronze V', xp: '200,000', bonus: '$50' },
  ],
};

function TierBadge({ size = 32 }) {
  return (
    <img
      src={frameBronze}
      alt=""
      draggable={false}
      className="shrink-0 object-cover select-none"
      style={{ width: size, height: size }}
    />
  );
}

function CurrentRankCard() {
  return (
    <div className="relative overflow-hidden rounded-card border border-line bg-bg-card p-6 min-h-[425px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[420px] w-[520px]"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255, 140, 40, 0.55) 0%, rgba(255, 80, 30, 0.35) 25%, rgba(180, 40, 20, 0.18) 50%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[280px] w-[340px]"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255, 200, 80, 0.5) 0%, rgba(255, 122, 26, 0.25) 35%, transparent 70%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-4 h-8 w-8 border-t-2 border-l-2 border-white/85 rounded-tl-md"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-white/85 rounded-tr-md"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-white/85 rounded-bl-md"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-white/85 rounded-br-md"
      />

      <div className="relative flex flex-col items-center">
        <div className="relative h-[260px] w-full flex items-end justify-center">
          <div
            aria-hidden="true"
            className="absolute bottom-1 left-1/2 -translate-x-1/2 h-4 w-[230px] rounded-[50%] bg-black/60 blur-md"
          />
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={heroBronze}
            aria-label="Bronze III character"
            className="relative h-[260px] w-auto object-contain drop-shadow-[0_12px_30px_rgba(255,122,26,0.5)] select-none"
          />
        </div>

        <div className="mt-2 text-center">
          <div className="text-sm font-light text-text-muted">Current</div>
          <h3 className="mt-1 text-[24px] font-bold text-white leading-none">Bronze III</h3>
        </div>

        <div className="mt-6 w-full max-w-[460px]">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted font-light">Wager For Next Rank</span>
            <span className="text-white font-medium">Bronze IV</span>
          </div>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-bg-chip">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#FFA040]"
              style={{ width: '20%' }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-text-muted">Remaining XP 150,000</span>
            <span className="text-white">20%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextRankItem({ name, status, xp, pct }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-[54px] w-[54px] shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-[#FF7A1A]/30 to-[#7A1A1F]/25 border border-promo-red/30">
        <img
          src={frameBronze}
          alt=""
          className="h-full w-full object-cover scale-[1.15] select-none"
          draggable={false}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-white font-semibold text-base">{name}</span>
          {status === 'active' ? (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-bg-chip border border-line px-2.5 py-1 text-xs font-semibold text-text-muted">
              <Lock size={11} />
              Locked
            </span>
          )}
        </div>
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-bg-chip">
          <div
            className={`h-full rounded-full ${status === 'active' ? 'bg-promo-red' : 'bg-line'}`}
            style={{ width: status === 'active' ? '12%' : '0%' }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-text-muted">{xp}</span>
          <span className="text-text-muted">{pct}</span>
        </div>
      </div>
    </div>
  );
}

function NextRankList() {
  return (
    <div className="rounded-card border border-line bg-bg-card p-6 min-h-[425px]">
      <h3 className="text-base font-semibold text-white">Next Rank</h3>
      <div className="mt-5 flex flex-col gap-5">
        {NEXT_RANKS.map((r, i) => (
          <div key={r.name}>
            <NextRankItem {...r} />
            {i < NEXT_RANKS.length - 1 && (
              <div aria-hidden="true" className="mt-5 h-px w-full bg-line/50" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RewardCard({ reward }) {
  const locked = reward.action.kind === 'locked';
  return (
    <div className="relative overflow-hidden rounded-card border border-line bg-bg-card p-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[180px]"
        style={{ background: reward.glow }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 h-3 w-[78%] rounded-[50%] bg-black/50 blur-md"
      />
      <div className="relative flex flex-col items-center">
        <div className="h-[150px] w-full flex items-center justify-center">
          <img
            src={reward.img}
            alt=""
            className="h-full w-auto object-contain select-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.5)]"
            draggable={false}
          />
        </div>
        <div className="mt-2 text-center text-white font-semibold text-sm">{reward.title}</div>
        <button
          type="button"
          className={[
            'mt-4 w-full rounded-md py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-1.5',
            locked
              ? 'bg-bg-chip border border-line text-text-muted cursor-not-allowed'
              : 'bg-accent hover:bg-accent-hover text-white shadow-glow',
          ].join(' ')}
          disabled={locked}
        >
          {locked && <Lock size={14} />}
          {reward.action.label}
        </button>
      </div>
    </div>
  );
}

function VipLevelCard({ level }) {
  const isCompleted = level.status === 'completed';
  const isActive = level.status === 'active';
  const isLocked = level.status === 'locked';

  return (
    <div
      className={[
        'relative overflow-hidden rounded-xl border bg-bg-card transition-colors aspect-[3/4]',
        isActive
          ? 'border-accent ring-2 ring-accent/70 shadow-[0_0_28px_rgba(123,47,247,0.5)]'
          : 'border-line',
      ].join(' ')}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-b ${level.accent}`}
      />

      <img
        src={level.frame}
        alt=""
        className={[
          'absolute inset-0 h-full w-full object-cover select-none',
          isLocked ? 'opacity-35 saturate-50' : 'opacity-100',
        ].join(' ')}
        draggable={false}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/80 to-transparent"
      />

      {isCompleted && (
        <div className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 rounded-md bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 shadow-lg">
          <Check size={11} strokeWidth={3} />
          Completed
        </div>
      )}

      {isLocked && (
        <div className="absolute inset-0 z-10 grid place-items-center">
          <div className="h-11 w-11 rounded-full bg-black/70 border border-white/15 grid place-items-center backdrop-blur-sm">
            <Lock size={18} className="text-white/90" />
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-3 pt-6 text-center">
        <div
          className={[
            'text-[10px] font-medium uppercase tracking-[0.12em]',
            isLocked ? 'text-text-dim' : 'text-white/70',
          ].join(' ')}
        >
          {level.tier}
        </div>
        <div
          className={[
            'mt-1 font-display text-xl md:text-[22px] font-extrabold tracking-wide uppercase leading-none',
            isLocked ? 'text-text-muted' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]',
          ].join(' ')}
        >
          {level.name}
        </div>
      </div>
    </div>
  );
}

function TierTable({ tier }) {
  const rows = TIER_TABLES[tier] ?? [];
  return (
    <div className="rounded-card border border-[#232325] bg-bg-card p-5">
      <div className="flex items-center justify-between gap-3 px-5">
        <div className="inline-flex items-center gap-2.5">
          <TierBadge size={40} />
          <span className="text-base font-semibold text-white">{tier}</span>
        </div>
        <ChevronDown size={24} className="text-text-muted" />
      </div>

      <div className="mt-3">
        <div className="grid grid-cols-3 items-center h-[50px] px-5">
          <div className="text-[14px] font-normal text-[#d0d0d0]">Level</div>
          <div className="text-[14px] font-normal text-[#d0d0d0]">XP required</div>
          <div className="text-[14px] font-normal text-[#d0d0d0]">Level Up Bonus</div>
        </div>

        {rows.map((row, i) => (
          <div
            key={row.level}
            className={[
              'grid grid-cols-3 items-center h-[60px] px-5',
              i < rows.length - 1 ? 'border-b border-[#232325]' : '',
            ].join(' ')}
          >
            <div className="flex items-center gap-2">
              <TierBadge size={32} />
              <span className="text-[14px] font-semibold text-white">{row.level}</span>
            </div>
            <div className="text-[14px] font-semibold text-white">{row.xp}</div>
            <div className="text-[14px] font-semibold text-white">{row.bonus}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VipPage() {
  const [activeTier] = useState('Bronze');

  return (
    <div className="space-y-10">
      <h1 className="font-display text-2xl md:text-[28px] font-bold text-text">VIP Programs</h1>

      <section className="grid gap-4 lg:grid-cols-2">
        <CurrentRankCard />
        <NextRankList />
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Gift size={20} className="text-accent" />
          <h2 className="text-xl md:text-[22px] font-bold text-text">Your Rewards</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REWARDS.map((r) => (
            <RewardCard key={r.id} reward={r} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2">
          <Crown size={20} className="text-accent" />
          <h2 className="text-xl md:text-[22px] font-bold text-text">VIP Levels</h2>
        </div>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
          {VIP_LEVELS.map((l) => (
            <VipLevelCard key={l.name} level={l} />
          ))}
        </div>

        <TierTable tier={activeTier} />
      </section>
    </div>
  );
}
