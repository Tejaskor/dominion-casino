import { providers } from '@/assets/images/index.js';

export default function ProviderStrip() {
  const loop = providers.concat(providers);

  return (
    <section aria-label="Our providers" className="space-y-4">
      <h2 className="section-title">Our Providers</h2>
      <div className="relative overflow-hidden group">
        <div className="flex w-max gap-2 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.concat(loop).map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="shrink-0 h-[70px] w-[120px] relative"
              aria-label={p.name}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="absolute inset-0 h-full w-full object-contain p-2 opacity-90 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
