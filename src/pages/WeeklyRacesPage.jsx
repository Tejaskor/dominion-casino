import trophy from '@/assets/images/weekly-races/trophy.svg';
import race1 from '@/assets/images/weekly-races/race-1.svg';
import race2 from '@/assets/images/weekly-races/race-2.svg';

const RACES = [
  {
    id: 'race-1',
    title: 'Slot Machine Racing Boost',
    image: race1,
    imgWidth: 182,
    imgHeight: 155,
    imgLeft: 30,
    totalPrize: '$10,000',
    minBet: '0.50',
    duration: '4 Days',
    endsIn: '2 Days',
    playing: 123,
  },
  {
    id: 'race-2',
    title: 'Slot Machine Racing Boost',
    image: race2,
    imgWidth: 228,
    imgHeight: 135,
    imgLeft: 14,
    totalPrize: '$10,000',
    minBet: '0.50',
    duration: '4 Days',
    endsIn: '2 Days',
    playing: 123,
  },
];

function Stat({ label, value, alignEnd }) {
  return (
    <div className={`flex flex-col gap-[8px] shrink-0 ${alignEnd ? 'items-end' : 'items-start'}`}>
      <span className="text-[16px] font-light text-[#939294] whitespace-nowrap">{label}</span>
      <span className="text-[20px] font-semibold text-white whitespace-nowrap">{value}</span>
    </div>
  );
}

function RaceCard({ race }) {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[#7717FF]/10 bg-[#101010] flex flex-col items-start gap-[20px] sm:gap-[30px] pb-[20px]">
      <div className="relative h-[140px] sm:h-[163px] w-full shrink-0 bg-[#7717FF] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[120px] left-1/2 -translate-x-1/2 h-[300px] w-[480px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(180, 110, 255, 0.55) 0%, rgba(150, 70, 255, 0.25) 35%, transparent 70%)',
          }}
        />

        {/* Mobile / small: flex layout so image and title sit side-by-side regardless of card width */}
        <div className="md:hidden relative flex items-center gap-3 h-full px-4">
          <img
            src={race.image}
            alt=""
            className="relative shrink-0 h-[110px] w-auto select-none object-contain pointer-events-none"
            draggable={false}
          />
          <h3 className="font-base-runner text-[22px] sm:text-[26px] capitalize text-white leading-normal flex-1">
            {race.title}
          </h3>
        </div>

        {/* md+ : Figma-exact absolute positioning */}
        <img
          src={race.image}
          alt=""
          className="hidden md:block absolute top-[11px] select-none object-contain pointer-events-none"
          style={{
            left: `${race.imgLeft}px`,
            width: `${race.imgWidth}px`,
            height: `${race.imgHeight}px`,
          }}
          draggable={false}
        />

        <h3 className="hidden md:block absolute top-[46px] left-[259px] w-[209px] text-left font-base-runner text-[32px] capitalize text-white leading-normal">
          {race.title}
        </h3>
      </div>

      <div className="flex flex-col items-start gap-5 sm:gap-[30px] px-[20px] w-full">
        <div className="flex items-center justify-between w-full gap-2 flex-wrap sm:flex-nowrap">
          <Stat label="Total Prize" value={race.totalPrize} />
          <Stat label="Min Bet" value={race.minBet} />
          <Stat label="Duration" value={race.duration} />
          <Stat label="Ends In" value={race.endsIn} alignEnd />
        </div>

        <div className="h-px w-full bg-[#232325]" />

        <div className="flex items-center justify-between w-full gap-3 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-[4px]">
            <span className="h-[6px] w-[6px] rounded-full bg-emerald-400 shrink-0" />
            <span className="text-[16px] sm:text-[20px] font-semibold text-white whitespace-nowrap">
              {race.playing} Playing
            </span>
          </div>
          <button
            type="button"
            className="relative inline-flex h-[48px] sm:h-[58px] items-center justify-center rounded-[8px] bg-[#7717FF] hover:bg-[#8a30ff] px-7 sm:px-[40px] text-[16px] sm:text-[20px] font-medium text-white transition-colors shadow-[inset_0_-4px_16px_rgba(238,238,238,0.04),inset_0_4px_16px_rgba(238,238,238,0.04)]"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[300px] w-full sm:h-[400px] sm:w-[700px] lg:h-[480px] lg:w-[900px]"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 65% 50%, rgba(120, 24, 255, 0.85) 0%, rgba(120, 24, 255, 0.45) 30%, rgba(120, 24, 255, 0.15) 60%, transparent 85%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-0 h-[220px] w-full sm:h-[280px] sm:w-[520px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 40% 50%, rgba(120, 24, 255, 0.35) 0%, rgba(120, 24, 255, 0.12) 40%, transparent 75%)',
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] items-center gap-6">
        <div className="min-w-0 space-y-6 pt-1">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold capitalize leading-tight text-white">
            Weekly Races
          </h2>

          <div className="space-y-5">
            <h1 className="font-base-runner text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-normal leading-[100%] tracking-normal capitalize text-white">
              Climb The
              <br />
              Leaderboard &amp;
              <br />
              Claim The Glory!
            </h1>
            <p className="font-light text-[14px] text-[#939294] leading-[22px] max-w-[490px]">
              Compete against thousands of players every week and rise to the top.
              Every wager earns you points, pushing you closer to the crown.
              Show your skill, dominate the ranks, and win massive rewards.
            </p>
          </div>
        </div>

        <img
          src={trophy}
          alt=""
          className="hidden lg:block w-[400px] xl:w-[440px] h-auto select-none -mt-4 justify-self-end relative"
          draggable={false}
        />
      </div>
    </section>
  );
}

export default function WeeklyRacesPage() {
  return (
    <div className="relative space-y-10 pb-[500px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[460px] h-[80px] w-[720px] rounded-[50%]"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(123, 47, 247, 0.5) 0%, rgba(123, 47, 247, 0.2) 40%, transparent 75%)',
        }}
      />

      <HeroSection />

      <section className="relative grid gap-[30px] lg:grid-cols-2">
        {RACES.map((r) => (
          <RaceCard key={r.id} race={r} />
        ))}
      </section>
    </div>
  );
}
