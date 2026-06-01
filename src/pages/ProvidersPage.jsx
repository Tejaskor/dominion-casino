import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const providerModules = import.meta.glob('../assets/images/providers/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const providerImages = Object.entries(providerModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

export default function ProvidersPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <header className="flex items-center gap-3 pb-4 border-b border-line">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-bg-chip border border-line text-text hover:bg-bg-elevated transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={16} />
        </button>
        <h1 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text">
          Providers
        </h1>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {providerImages.map((url, i) => (
          <button
            key={url}
            type="button"
            className="group block w-full max-w-[220px] mx-auto overflow-hidden rounded-card transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent-soft"
            aria-label={`Provider ${i + 1}`}
          >
            <img
              src={url}
              alt=""
              loading="lazy"
              className="block w-full h-auto"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
