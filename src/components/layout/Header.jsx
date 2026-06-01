import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Search,
  Bell,
  MessageSquare,
  User,
  Settings,
  LogOut,
  Menu,
  ChevronDown,
  Wallet,
} from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext.jsx';
import { useSearch } from '@/context/SearchContext.jsx';
import { useAuth } from '@/context/AuthContext.jsx';
import { ROUTES } from '@/constants/routes.js';

const HIDE_AUTH_BUTTONS_ROUTES = new Set([ROUTES.PROVIDERS]);

function GoldChip() {
  return (
    <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#FFE36A_0%,#F2C94C_45%,#B8830F_100%)] ring-1 ring-amber-900/40 shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
      <span className="absolute inset-[3px] rounded-full border border-amber-900/30" />
      <span className="relative text-[11px] font-extrabold text-amber-900/90 leading-none">$</span>
    </span>
  );
}

function RedChip() {
  return (
    <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#FF6A8A_0%,#E0361B_55%,#7A1A1F_100%)] ring-1 ring-red-950/50 shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
      <span className="absolute inset-[3px] rounded-full border border-red-950/40" />
      <span className="relative text-[11px] font-extrabold text-white/95 leading-none">D</span>
    </span>
  );
}

function BalanceChips() {
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex items-center gap-2">
      <div className="flex items-center rounded-xl bg-bg-chip border border-line p-1.5">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-bg-elevated transition-colors"
          aria-label="D1 chips balance: 200"
        >
          <GoldChip />
          <span className="text-sm font-semibold text-text leading-none">200</span>
        </button>
        <span className="mx-1 h-5 w-px bg-line" />
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-bg-elevated transition-colors"
          aria-label="Sweep coins balance: 10"
        >
          <RedChip />
          <span className="text-sm font-semibold text-text leading-none">10</span>
        </button>
      </div>
      <button
        type="button"
        onClick={() => navigate('/buy-coins')}
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent hover:bg-accent-hover text-white transition-colors shadow-glow"
        aria-label="Open wallet"
      >
        <Wallet size={20} />
      </button>
    </div>
  );
}

function NotificationsPanel({ open, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;
  const items = [
    { title: 'You earned 50 free spins', sub: 'Claim them on Slots' },
    { title: 'Weekly Race ends in 3h', sub: "You're 4th place" },
    { title: 'New Challenge: Big Wild Buffalo', sub: 'Prize 250 D1 Chips' },
  ];
  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Notifications"
      className="absolute right-0 top-12 z-50 w-80 rounded-xl bg-bg-elevated border border-line shadow-card animate-slide-up"
    >
      <div className="border-b border-line p-3 text-sm font-semibold">Notifications</div>
      <ul className="max-h-80 overflow-y-auto py-1">
        {items.map((n, i) => (
          <li key={i} className="px-3 py-2 hover:bg-bg-chip cursor-pointer">
            <div className="text-sm text-text">{n.title}</div>
            <div className="text-xs text-text-muted">{n.sub}</div>
          </li>
        ))}
      </ul>
      <div className="border-t border-line p-2 text-center">
        <button className="text-xs text-accent-soft hover:underline">Mark all as read</button>
      </div>
    </div>
  );
}

function ProfileMenu({ open, onClose }) {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { logout } = useAuth();
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;
  const go = (path) => {
    onClose();
    navigate(path);
  };
  const handleSignOut = () => {
    logout();
    onClose();
    navigate(ROUTES.LOGIN, { replace: true });
  };
  return (
    <div
      ref={ref}
      role="menu"
      className="absolute right-0 top-12 z-50 w-56 rounded-xl bg-bg-elevated border border-line shadow-card py-1 animate-slide-up"
    >
      <button
        role="menuitem"
        onClick={() => go('/profile')}
        className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-bg-chip"
      >
        <User size={14} /> Profile
      </button>
      <button
        role="menuitem"
        onClick={() => go('/settings')}
        className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-bg-chip"
      >
        <Settings size={14} /> Settings
      </button>
      <div className="my-1 h-px bg-line" />
      <button
        role="menuitem"
        onClick={handleSignOut}
        className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-bg-chip text-text-muted"
      >
        <LogOut size={14} /> Sign out
      </button>
    </div>
  );
}

export default function Header() {
  const { openMobile } = useSidebar();
  const { query, setQuery } = useSearch();
  const { pathname } = useLocation();
  const { currentUser, isAuthenticated } = useAuth();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const showAuthButtons = !HIDE_AUTH_BUTTONS_ROUTES.has(pathname);
  const username = currentUser?.username ?? '';
  const initial = username.charAt(0).toUpperCase() || 'U';

  return (
    <header className="sticky top-0 z-30 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="grid h-[68px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 md:px-6">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={openMobile}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted hover:text-text hover:bg-bg-chip"
            aria-label="Open sidebar"
          >
            <Menu size={18} />
          </button>

          <Link to={ROUTES.HOME} className="flex items-center select-none" aria-label="SUPREX home">
            <span className="font-display text-2xl font-extrabold tracking-tight">SUPR</span>
            <span className="font-display text-2xl font-extrabold tracking-tight text-promo-red">
              EX
            </span>
          </Link>

          <div className="ml-2 hidden md:flex max-w-xs flex-1 items-center gap-2 rounded-full bg-bg-chip border border-line px-3 py-2">
            <Search size={16} className="text-text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search games, providers..."
              className="w-full bg-transparent text-sm placeholder:text-text-dim outline-none"
              aria-label="Search games"
            />
          </div>
        </div>

        <div className="justify-self-center">
          <BalanceChips />
        </div>

        <div className="justify-self-end flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted hover:text-text hover:bg-bg-chip"
                aria-label="Messages"
              >
                <MessageSquare size={18} />
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setNotifOpen((o) => !o)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted hover:text-text hover:bg-bg-chip relative"
                  aria-label="Notifications"
                  aria-expanded={notifOpen}
                >
                  <Bell size={18} />
                  <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-promo-red" />
                </button>
                <NotificationsPanel open={notifOpen} onClose={() => setNotifOpen(false)} />
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen((o) => !o)}
                  className="inline-flex h-9 items-center gap-2 rounded-md pl-1 pr-2 text-text hover:bg-bg-chip"
                  aria-label="Profile menu"
                  aria-expanded={profileOpen}
                >
                  <div className="h-8 w-8 rounded-full bg-accent-gradient grid place-items-center text-xs font-bold text-white">
                    {initial}
                  </div>
                  <span className="hidden sm:inline text-sm font-semibold">{username}</span>
                  <ChevronDown size={14} className="text-text-muted" />
                </button>
                <ProfileMenu open={profileOpen} onClose={() => setProfileOpen(false)} />
              </div>
            </>
          ) : (
            showAuthButtons && (
              <>
                <Link to={ROUTES.LOGIN} className="btn-ghost hidden sm:inline-flex">
                  Login
                </Link>
                <Link to={ROUTES.REGISTER} className="btn-primary">
                  Register
                </Link>
              </>
            )
          )}
        </div>
      </div>

      {/* Mobile search row */}
      <div className="md:hidden border-t border-line px-4 py-2">
        <div className="flex items-center gap-2 rounded-full bg-bg-chip border border-line px-3 py-2">
          <Search size={16} className="text-text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games..."
            className="w-full bg-transparent text-sm placeholder:text-text-dim outline-none"
            aria-label="Search games"
          />
        </div>
      </div>
    </header>
  );
}
