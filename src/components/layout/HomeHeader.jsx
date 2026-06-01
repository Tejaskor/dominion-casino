import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes.js';

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-30 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="flex h-[68px] items-center justify-between gap-3 px-4 md:px-6">
        <Link to={ROUTES.HOME} className="flex items-center select-none" aria-label="SUPREX home">
          <span className="font-display text-2xl font-extrabold tracking-tight">SUPR</span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-promo-red">
            EX
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link to={ROUTES.LOGIN} className="btn-ghost hidden sm:inline-flex">
            Login
          </Link>
          <Link to={ROUTES.REGISTER} className="btn-primary">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
