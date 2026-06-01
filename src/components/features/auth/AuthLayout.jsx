import cardsGif from '@/assets/images/login/cards.gif';

export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#080809] flex flex-col lg:flex-row">
      <section className="login-left relative flex flex-col items-center lg:basis-[58%] xl:basis-[55%] min-h-[480px] lg:min-h-screen overflow-hidden px-6 py-10 lg:py-16">
        <div aria-hidden="true" className="login-dots pointer-events-none absolute inset-0" />

        <div
          aria-hidden="true"
          className="login-orb absolute pointer-events-none rounded-full mix-blend-screen"
          style={{
            top: '-180px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '560px',
            height: '560px',
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 100, 200, 0.6) 0%, rgba(180, 70, 220, 0.45) 30%, rgba(110, 30, 180, 0.2) 60%, transparent 80%)',
            filter: 'blur(8px)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 100%), ' +
              'radial-gradient(1.5px 1.5px at 75% 20%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
              'radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.4) 0%, transparent 100%), ' +
              'radial-gradient(2px 2px at 85% 80%, rgba(255,255,255,0.5) 0%, transparent 100%), ' +
              'radial-gradient(1px 1px at 10% 85%, rgba(255,255,255,0.4) 0%, transparent 100%), ' +
              'radial-gradient(1.5px 1.5px at 60% 45%, rgba(255,255,255,0.5) 0%, transparent 100%)',
          }}
        />

        <div className="login-logo relative z-10 pt-8 lg:pt-12">
          <h1 className="font-display text-[44px] sm:text-[56px] md:text-[80px] lg:text-[112px] xl:text-[128px] font-extrabold tracking-tight leading-none text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <span>SUPR</span>
            <span className="text-[#EF0C27]">EX</span>
          </h1>
        </div>

        <div className="login-cards relative z-10 w-full max-w-[640px] mt-auto pt-12 lg:pt-24">
          <img
            src={cardsGif}
            alt="Royal flush cards"
            className="block w-full h-auto select-none drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)]"
            draggable={false}
          />
        </div>
      </section>

      <section className="relative flex-1 bg-[#080809] flex items-center justify-center px-6 py-10 lg:py-20 min-h-screen">
        <div className="w-full max-w-[540px]">{children}</div>
      </section>
    </div>
  );
}
