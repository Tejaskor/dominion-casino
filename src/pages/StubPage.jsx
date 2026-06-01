import { Construction } from 'lucide-react';

export default function StubPage({ title, description }) {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="max-w-md space-y-3 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-bg-chip border border-line">
          <Construction size={22} className="text-accent-soft" />
        </div>
        <h1 className="section-title">{title}</h1>
        {description && <p className="text-sm text-text-muted">{description}</p>}
      </div>
    </div>
  );
}
