import { useState } from 'react';
import { Home, BadgeCheck, Cherry, Shield, Spade, SlidersHorizontal } from 'lucide-react';

const TABS = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'originals', label: 'Originals', Icon: BadgeCheck },
  { id: 'slots', label: 'Slots', Icon: Cherry },
  { id: 'live-dealers', label: 'Live Dealers', Icon: Shield },
  { id: 'table-games', label: 'Table Games', Icon: Spade },
];

export default function HomeTabs({ value, onChange, onFiltersClick }) {
  const [internal, setInternal] = useState('home');
  const current = value ?? internal;
  const setCurrent = onChange ?? setInternal;

  return (
    <div className="flex items-center gap-3">
      <div
        role="tablist"
        aria-label="Home sections"
        className="flex-1 min-w-0 overflow-x-auto rounded-2xl bg-bg-card border border-line p-1.5"
      >
        <div className="flex items-center gap-1">
          {TABS.map(({ id, label, Icon }) => {
            const active = id === current;
            return (
              <button
                key={id}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setCurrent(id)}
                className={[
                  'relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors',
                  active
                    ? 'bg-bg-elevated text-text'
                    : 'text-text-muted hover:text-text hover:bg-bg-chip',
                ].join(' ')}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-[#7717FF] shadow-glow"
                  />
                )}
                <Icon size={16} className={active ? 'text-accent-soft' : ''} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={onFiltersClick}
        className="shrink-0 flex items-center gap-2 rounded-2xl bg-bg-card border border-line px-5 py-3 text-sm font-semibold text-text-muted hover:text-text hover:bg-bg-chip transition-colors"
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>
    </div>
  );
}
