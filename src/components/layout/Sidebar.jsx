import { NavLink } from 'react-router-dom';
import {
  Home,
  Clock,
  TrendingUp,
  Sparkles,
  Music,
  Dices,
  Coins,
  Spade,
  CircleDot,
  Tv2,
  CircleDollarSign,
  Diamond,
  Trophy,
  Target,
  Crown,
  Handshake,
  Building2,
  LifeBuoy,
  ChevronDown,
  Plus,
  Menu,
} from 'lucide-react';
import { useState } from 'react';
import { useSidebar } from '@/context/SidebarContext.jsx';

const GROUPS = [
  {
    id: 'for-you',
    title: 'For You',
    items: [
      { to: '/', label: 'Home', Icon: Home, end: true },
      { to: '/recently-played', label: 'Recently Played', Icon: Clock },
      { to: '/trending', label: 'Trending Games', Icon: TrendingUp },
      { to: '/new-releases', label: 'New Releases', Icon: Sparkles },
      { to: '/music', label: 'Music', Icon: Music },
    ],
  },
  {
    id: 'games',
    title: 'Games',
    items: [
      { to: '/originals', label: 'SUPREX Originals', Icon: Diamond },
      { to: '/slots', label: 'Slots', Icon: Coins },
      { to: '/live-casino', label: 'Live Casino', Icon: Tv2 },
      { to: '/game-shows', label: 'Game Shows', Icon: Dices },
      { to: '/blackjack', label: 'Blackjack', Icon: Spade },
      { to: '/baccarat', label: 'Baccarat', Icon: CircleDollarSign },
      { to: '/roulette', label: 'Roulette', Icon: CircleDot },
    ],
  },
  {
    id: 'promotions',
    title: 'Promotions',
    items: [
      { to: '/weekly-races', label: 'Weekly Races', Icon: Trophy },
      { to: '/challenges', label: 'Challenges', Icon: Target },
      { to: '/vip-rewards', label: 'VIP & Rewards', Icon: Crown },
      { to: '/affiliate', label: 'Affiliate', Icon: Handshake },
      { to: '/providers', label: 'Providers', Icon: Building2 },
      { to: '/live-support', label: 'Live Support', Icon: LifeBuoy },
    ],
  },
];

function SidebarItem({ to, label, Icon, end, collapsed, onNavigate }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          isActive ? 'bg-bg-elevated text-text' : 'text-text-muted hover:bg-bg-chip hover:text-text',
          collapsed ? 'justify-center' : '',
        ].join(' ')
      }
      title={collapsed ? label : undefined}
    >
      <Icon size={18} className="shrink-0" />
      {!collapsed && <span className="truncate">{label}</span>}
    </NavLink>
  );
}

function SidebarGroup({ group, collapsed, onNavigate }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="px-3">
      {!collapsed && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="mt-4 mb-2 flex w-full items-center justify-between text-text font-semibold text-sm"
          aria-expanded={open}
        >
          <span>{group.title}</span>
          <ChevronDown
            size={16}
            className={`text-text-muted transition-transform ${open ? '' : '-rotate-90'}`}
          />
        </button>
      )}
      {collapsed && <div className="my-3 h-px bg-line" aria-hidden="true" />}
      {(open || collapsed) && (
        <div className="flex flex-col gap-0.5">
          {group.items.map((item) => (
            <SidebarItem
              key={item.to}
              {...item}
              collapsed={collapsed}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const { collapsed, toggleCollapsed, mobileOpen, closeMobile } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={closeMobile}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
        />
      )}

      <aside
        className={[
          'fixed lg:sticky top-0 left-0 z-50 h-screen flex-shrink-0',
          'bg-bg-surface border-r border-line',
          'transition-[width,transform] duration-200 ease-out',
          'flex flex-col',
          collapsed ? 'lg:w-[76px]' : 'lg:w-[260px]',
          'w-[280px]',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
        aria-label="Primary"
      >
        {/* Top: hamburger + Social Casino chip + add */}
        <div className="flex items-center gap-2 p-3">
          <button
            type="button"
            onClick={toggleCollapsed}
            className="hidden lg:inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted hover:text-text hover:bg-bg-chip"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <Menu size={18} />
          </button>
          <button
            type="button"
            onClick={closeMobile}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted hover:text-text hover:bg-bg-chip"
            aria-label="Close menu"
          >
            <Menu size={18} />
          </button>
          {!collapsed && (
            <>
              <div className="flex-1">
                <div className="rounded-md bg-accent-gradient px-3 py-1.5 text-center text-xs font-bold text-white tracking-wide shadow-glow">
                  SOCIAL CASINO
                </div>
              </div>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-bg-chip border border-line text-text-muted hover:text-text"
                aria-label="Add to home"
                title="Add to home"
              >
                <Plus size={16} />
              </button>
            </>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto pb-6">
          {GROUPS.map((g) => (
            <SidebarGroup key={g.id} group={g} collapsed={collapsed} onNavigate={closeMobile} />
          ))}
        </nav>
      </aside>
    </>
  );
}
