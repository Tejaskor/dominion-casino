import { ArrowRight } from 'lucide-react';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll.js';

const PROMOS = [
  {
    id: 'p1',
    title: 'Double the Thrill, Double the Rewards!',
    sub: 'Join today and grab your 100% Casino Match Bonus',
    badge: 'New Player',
    accent: '100%',
    accentLabel: 'MATCH BONUS',
    theme: 'red',
  },
  {
    id: 'p2',
    title: 'Your Poker Face Deserves a Reward!',
    sub: 'Win up to 3X rewards in our Weekly Poker Challenge.',
    badge: 'Weekly',
    accent: '3X',
    accentLabel: 'REWARDS',
    theme: 'dark',
  },
  {
    id: 'p3',
    title: 'Your Next Jackpot Could Be One Spin Away!',
    sub: 'Claim your 50 free spins and start winning today.',
    badge: 'Limited',
    accent: '50',
    accentLabel: 'FREE SPINS',
    theme: 'red',
  },
  {
    id: 'p4',
    title: 'VIP Cashback Every Single Monday!',
    sub: 'Get up to 15% back on all losses with VIP membership.',
    badge: 'VIP Only',
    accent: '15%',
    accentLabel: 'CASHBACK',
    theme: 'purple',
  },
  {
    id: 'p5',
    title: 'Refer a Friend & Earn Together!',
    sub: 'Both you and your friend get $25 when they join.',
    badge: 'Referral',
    accent: '$25',
    accentLabel: 'REWARD EACH',
    theme: 'gold',
  },
  {
    id: 'p6',
    title: 'Tournament Saturdays Are Back!',
    sub: 'Compete for a share of the $10K weekly prize pool.',
    badge: 'Tournament',
    accent: '$10K',
    accentLabel: 'PRIZE POOL',
    theme: 'teal',
  },
  {
    id: 'p7',
    title: 'Mega Slots Madness Weekend!',
    sub: 'Triple your deposit on every slot game this weekend.',
    badge: 'Weekend',
    accent: '3X',
    accentLabel: 'DEPOSIT BOOST',
    theme: 'dark',
  },
];

const THEMES = {
  red: {
    surface: 'bg-[linear-gradient(135deg,#FF7A1A_0%,#E0361B_55%,#7A1A1F_100%)]',
    accentText: 'text-white',
    accentGlow: 'bg-white/15',
    orb1: 'bg-orange-300/30',
    orb2: 'bg-red-900/40',
    badge: 'bg-white/15 text-white border-white/20',
  },
  dark: {
    surface: 'bg-[linear-gradient(135deg,#3A0F11_0%,#1A0A0A_70%,#0A0A0B_100%)]',
    accentText: 'text-promo-orange',
    accentGlow: 'bg-promo-orange/20',
    orb1: 'bg-promo-orange/20',
    orb2: 'bg-promo-red/25',
    badge: 'bg-promo-orange/15 text-promo-orange border-promo-orange/30',
  },
  purple: {
    surface: 'bg-[linear-gradient(135deg,#7B2FF7_0%,#4A1696_60%,#1A0A2E_100%)]',
    accentText: 'text-white',
    accentGlow: 'bg-white/15',
    orb1: 'bg-accent-soft/30',
    orb2: 'bg-accent/40',
    badge: 'bg-white/15 text-white border-white/20',
  },
  gold: {
    surface: 'bg-[linear-gradient(135deg,#F2C94C_0%,#C49417_55%,#3A2A05_100%)]',
    accentText: 'text-[#1A1305]',
    accentGlow: 'bg-black/15',
    orb1: 'bg-yellow-200/40',
    orb2: 'bg-amber-900/30',
    badge: 'bg-black/20 text-black/85 border-black/15',
  },
  teal: {
    surface: 'bg-[linear-gradient(135deg,#0EA5A4_0%,#0A6E78_55%,#082A36_100%)]',
    accentText: 'text-white',
    accentGlow: 'bg-white/15',
    orb1: 'bg-cyan-300/30',
    orb2: 'bg-teal-900/40',
    badge: 'bg-white/15 text-white border-white/20',
  },
};

function PromoCard({ promo, onPlay }) {
  const t = THEMES[promo.theme] ?? THEMES.red;

  return (
    <article
      className={`relative snap-start shrink-0 w-[320px] sm:w-[380px] md:w-[460px] h-[230px] md:h-[250px] overflow-hidden rounded-card ${t.surface} shadow-card`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full blur-3xl ${t.orb1}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full blur-3xl ${t.orb2}`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-end gap-1 leading-none"
      >
        <span
          className={`font-display font-extrabold tracking-tight text-[64px] md:text-[78px] ${t.accentText} drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]`}
        >
          {promo.accent}
        </span>
        <span
          className={`font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] ${t.accentText} opacity-90`}
        >
          {promo.accentLabel}
        </span>
        <span
          className={`mt-2 h-1 w-12 rounded-full ${t.accentGlow}`}
        />
      </div>

      <div className="relative z-10 flex h-full max-w-[62%] flex-col justify-between p-5">
        <div>
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${t.badge}`}
          >
            {promo.badge}
          </span>
          <h3 className="mt-3 font-display text-xl md:text-[24px] font-extrabold leading-tight text-white drop-shadow">
            {promo.title}
          </h3>
          <p className="mt-2 text-xs md:text-sm text-white/85 line-clamp-2">
            {promo.sub}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onPlay?.(promo)}
          className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-semibold text-white hover:bg-white/25 transition"
        >
          Play now <ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
}

export default function PromoBanner({ onPlay }) {
  const { ref } = useHorizontalScroll();

  return (
    <section aria-label="Promotional banners">
      <div ref={ref} className="scroll-row">
        {PROMOS.map((p) => (
          <PromoCard key={p.id} promo={p} onPlay={onPlay} />
        ))}
      </div>
    </section>
  );
}
