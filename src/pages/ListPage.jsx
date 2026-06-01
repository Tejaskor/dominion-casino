import { useMemo, useState } from 'react';
import { ArrowDownAZ, SlidersHorizontal, ChevronDown } from 'lucide-react';
import GameCard from '@/components/features/home/GameCard.jsx';
import GameDetailModal from '@/components/features/home/GameDetailModal.jsx';
import { games as allGames } from '@/data/games.js';
import { useSearch } from '@/context/SearchContext.jsx';

const SORTS = [
  { id: 'popular', label: 'Most popular' },
  { id: 'rating', label: 'Top rated' },
  { id: 'az', label: 'A → Z' },
  { id: 'za', label: 'Z → A' },
];

function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const current = SORTS.find((s) => s.id === value) || SORTS[0];
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="chip hover:text-text"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <ArrowDownAZ size={14} /> {current.label}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-10 z-40 w-48 rounded-lg bg-bg-elevated border border-line shadow-card animate-slide-up"
          onMouseLeave={() => setOpen(false)}
        >
          {SORTS.map((s) => (
            <li key={s.id}>
              <button
                role="option"
                aria-selected={value === s.id}
                onClick={() => {
                  onChange(s.id);
                  setOpen(false);
                }}
                className={[
                  'w-full px-3 py-2 text-left text-sm hover:bg-bg-chip',
                  value === s.id ? 'text-text' : 'text-text-muted',
                ].join(' ')}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterDropdown({ value, onChange, options, label }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="chip hover:text-text"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <SlidersHorizontal size={14} /> {label}: {value || 'All'}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-10 z-40 w-48 rounded-lg bg-bg-elevated border border-line shadow-card animate-slide-up"
          onMouseLeave={() => setOpen(false)}
        >
          <li>
            <button
              role="option"
              aria-selected={!value}
              onClick={() => {
                onChange('');
                setOpen(false);
              }}
              className="w-full px-3 py-2 text-left text-sm hover:bg-bg-chip text-text-muted"
            >
              All
            </button>
          </li>
          {options.map((opt) => (
            <li key={opt}>
              <button
                role="option"
                aria-selected={value === opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={[
                  'w-full px-3 py-2 text-left text-sm hover:bg-bg-chip',
                  value === opt ? 'text-text' : 'text-text-muted',
                ].join(' ')}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ListPage({
  title,
  subtitle,
  filterFn,
}) {
  const { query } = useSearch();
  const [sort, setSort] = useState('popular');
  const [provider, setProvider] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);

  const baseList = useMemo(() => allGames.filter(filterFn || (() => true)), [filterFn]);
  const providers = useMemo(
    () => Array.from(new Set(baseList.map((g) => g.provider))).sort(),
    [baseList],
  );

  const visible = useMemo(() => {
    let list = baseList;
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.genre.toLowerCase().includes(q) ||
          g.provider.toLowerCase().includes(q),
      );
    }
    if (provider) list = list.filter((g) => g.provider === provider);
    const sorted = [...list];
    if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    else if (sort === 'az') sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'za') sorted.sort((a, b) => b.title.localeCompare(a.title));
    return sorted;
  }, [baseList, query, provider, sort]);

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="section-title">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-text-muted">{subtitle}</p>}
          <p className="mt-1 text-xs text-text-dim">
            {visible.length} {visible.length === 1 ? 'game' : 'games'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FilterDropdown
            value={provider}
            onChange={setProvider}
            options={providers}
            label="Provider"
          />
          <SortDropdown value={sort} onChange={setSort} />
        </div>
      </header>

      {visible.length === 0 ? (
        <div className="rounded-card border border-line bg-bg-card p-10 text-center text-sm text-text-muted">
          No games match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {visible.map((g) => (
            <GameCard key={g.id} game={g} onPlay={setSelectedGame} />
          ))}
        </div>
      )}

      <GameDetailModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}
