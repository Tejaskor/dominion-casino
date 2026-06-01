import { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';
import treasureChest from '@/assets/images/affiliate/treasure-chest.svg';
import handshake from '@/assets/images/affiliate/handshake.svg';
import iconSignups from '@/assets/images/affiliate/icon-signups.svg';
import iconCoin from '@/assets/images/affiliate/icon-coin.svg';

const REFERRAL_LINK = 'https://suprex.com?r=W9dNE8hp9H';

const FAQS = [
  {
    q: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?',
    a: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea',
  },
  { q: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?', a: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.' },
  { q: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?', a: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.' },
  { q: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?', a: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.' },
  { q: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?', a: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.' },
  { q: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?', a: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.' },
  { q: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?', a: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.' },
];

const HERO_TABS = ['Overview', 'Referred Users', 'Earnings'];

function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_LINK);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -left-12 h-60 w-[280px] sm:w-[360px] lg:w-[420px]"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(120, 24, 255, 0.45) 0%, rgba(120, 24, 255, 0.18) 40%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-0 h-[200px] w-full sm:h-[260px] sm:w-[600px] lg:w-[820px]"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 60% 50%, rgba(94, 23, 173, 0.85) 0%, rgba(94, 23, 173, 0.45) 35%, rgba(94, 23, 173, 0.12) 65%, transparent 85%)',
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:gap-2">
        <div className="relative z-10 min-w-0 space-y-5 pt-1">
          <h2 className="capitalize text-[28px] md:text-[30px] font-semibold leading-tight text-white">
            SUPR<span className="text-promo-red">EX</span> Refer &amp; Earn
          </h2>

          <div className="inline-flex w-full max-w-fit items-center gap-1 rounded-[10px] bg-[#19191A] p-2 overflow-x-auto">
            {HERO_TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={[
                    'capitalize whitespace-nowrap rounded-md px-3.5 py-3 text-sm font-semibold text-white transition-colors',
                    active
                      ? 'bg-[#232325] border-b-2 border-accent'
                      : 'border-b-2 border-transparent hover:bg-[#232325]/60',
                  ].join(' ')}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="pt-8 md:pt-12 flex flex-col gap-3">
            <h1 className="font-base-runner text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-normal leading-[100%] tracking-normal capitalize text-white">
              Share Your Link!
            </h1>
            <p className="font-light text-[14px] text-[#939294] leading-[22px] max-w-[490px]">
              Got friends who love to play? Turn your connections into continuous income!
              Share your link, earn lifetime rewards from every bet they make &mdash; all live, all yours.
            </p>
          </div>

          <div className="flex items-center gap-5 pt-2">
            <div className="inline-flex items-center justify-center rounded-[8px] bg-[#19191A] p-[10px]">
              <p className="font-light text-[14px] text-white whitespace-nowrap">{REFERRAL_LINK}</p>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="relative inline-flex items-center gap-1.5 rounded-[8px] bg-[#7717FF] hover:bg-[#8a30ff] px-[14px] py-[10px] text-[14px] font-bold text-white transition-colors shadow-[inset_0_-4px_16px_rgba(238,238,238,0.04),inset_0_4px_16px_rgba(238,238,238,0.04)]"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        <img
          src={treasureChest}
          alt=""
          className="hidden lg:block w-[420px] xl:w-[460px] h-auto select-none justify-self-end relative -ml-12 xl:-ml-16"
          draggable={false}
        />
      </div>
    </section>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="relative overflow-hidden rounded-[14px] bg-[#19191A] border border-[#232325] px-[26px] py-[18px] flex items-center gap-[14px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-1/2 -translate-y-1/2 w-40 h-40"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(239, 12, 39, 0.45) 0%, rgba(239, 12, 39, 0.18) 35%, transparent 65%)',
        }}
      />
      <img
        src={icon}
        alt=""
        className="relative z-10 h-11 w-auto select-none"
        draggable={false}
      />
      <div className="relative z-10 flex flex-col gap-2 min-w-0">
        <p className="font-light text-[16px] text-[#939294] leading-none">{label}</p>
        <p className="font-semibold text-[24px] text-white leading-none">{value}</p>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="space-y-3">
      <div className="grid gap-4 md:grid-cols-2">
        <StatCard icon={iconSignups} label="Lifetime Signups" value="12 users" />
        <StatCard icon={iconCoin} label="D1 Chips Earned (Lifetime)" value="0.00 SC" />
      </div>
      <p className="text-xs md:text-sm text-text-muted">
        Commissions are calculated and made claimable based on your referred users&rsquo; activity.
      </p>
    </section>
  );
}

function PartnerSection() {
  return (
    <section className="relative overflow-hidden rounded-card bg-bg-card border border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-0 h-full w-72 bg-accent/15 blur-3xl"
      />
      <div className="relative flex flex-col items-start gap-6 p-6 md:flex-row md:items-center md:p-8">
        <img
          src={handshake}
          alt=""
          className="w-[160px] h-auto select-none"
          draggable={false}
        />
        <div className="flex-1 space-y-3">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-text">
            Become A Partner
          </h3>
          <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-2xl">
            If you command a serious online presence or lead an exceptional community,
            we want to hear from you &mdash; ASAP. Reach out to discuss custom deals and become
            part of the next-generation, creator-focused SUPREX.
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-accent hover:bg-accent-hover text-white text-sm md:text-base font-semibold px-6 py-3 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div
      className="rounded-[12px] border border-[#232325] p-6"
      style={{ boxShadow: '0px 4px 23.6px 0px rgba(0,0,0,0.05)' }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span
          className="font-normal text-[20px] leading-[28px] tracking-[-0.4px] text-white"
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-text-muted transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <p className="mt-4 font-normal text-[16px] leading-[1.6] text-[#707070]">{a}</p>
      )}
    </div>
  );
}

function FaqSection() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-6 px-6">
        <h2 className="font-sans text-[48px] font-semibold leading-[100%] tracking-normal align-middle text-center text-white">
          Affiliate FAQ
        </h2>
        <p className="mx-auto max-w-4xl text-[16px] font-normal text-text-muted leading-[1.5]">
          Our Frequently Asked Questions (FAQs) address common inquiries about our services.
          Here you&rsquo;ll find essential information on terminology, manage your membership,
          and make the most of your experience with SUPREX.
        </p>
      </div>
      <div className="space-y-5">
        {FAQS.map((f, i) => (
          <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}

export default function AffiliatePage() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <StatsSection />
      <PartnerSection />
      <FaqSection />
    </div>
  );
}
