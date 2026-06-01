import { social } from '@/assets/images/index.js';

const COLUMNS = [
  {
    title: 'Casino',
    items: ['Slots', 'Div 1 Originals', 'Live Casino', 'Blackjack', 'Roulette', 'Providers', 'Promotions'],
  },
  {
    title: 'Community',
    items: ['Discord', 'X/Twitter', 'Instagram', 'Facebook'],
  },
  {
    title: 'Support',
    items: ['Help Center', 'Contact Us', 'Affiliates', 'FAQs'],
  },
  {
    title: 'About Us',
    items: ['Our Story', 'Partners', 'KYC Policy', 'AML Policy', 'Terms of Service', 'Responsible Gaming', 'AMOE'],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-line bg-bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[320px]"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(124, 50, 175, 0.55) 0%, rgba(124, 50, 175, 0.25) 35%, rgba(124, 50, 175, 0.08) 60%, transparent 80%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-24 select-none text-center font-display font-extrabold leading-none tracking-tight opacity-60"
        style={{
          fontSize: 'clamp(120px, 22vw, 320px)',
          color: 'rgba(255, 255, 255, 0.06)',
        }}
      >
        SUPREX
      </div>

      <div className="relative px-6 lg:px-10 py-10">
        <div className="font-display text-2xl font-extrabold tracking-tight">
          SUPR<span className="text-promo-red">EX</span>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="space-y-4 max-w-sm">
            <p className="text-sm text-text-muted">
              SUPREX is committed to responsible gaming. Play smart, stay safe, and enjoy responsibly.
            </p>
            <p className="text-xs text-text-dim leading-relaxed">
              © All rights reserved 2021 - 2026 SUPREX operates under regulated jurisdictions.
              For more information, review our Terms & Privacy Policy.
            </p>
            <div className="flex gap-[14px] items-start pt-2">
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-bg-chip border border-line hover:bg-bg-elevated"
              >
                <img src={social.social2} alt="" className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Discord"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-bg-chip border border-line hover:bg-bg-elevated"
              >
                <img src={social.social1} alt="" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted">{col.title}</h4>
                <ul className="mt-3 space-y-2">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-text hover:text-accent-soft">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
