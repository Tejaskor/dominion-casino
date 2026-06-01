// Centralized image registry — keys are stable IDs, values are Vite-resolved URLs.
// Files are organized by purpose into subfolders: covers, promos, providers, social, icons.

// ───────────── Game cover thumbnails ─────────────
import cover01 from './covers/cover-01.svg';
import cover02 from './covers/cover-02.svg';
import cover03 from './covers/cover-03.svg';
import cover04 from './covers/cover-04.svg';
import cover05 from './covers/cover-05.svg';

// ───────────── Promo banner art ─────────────
import promoDoubleRewards from './promos/promo-double-rewards.svg';
import promoPokerFace from './promos/promo-poker-face.svg';
import promoJackpot from './promos/promo-jackpot.svg';
import promoLockedSection from './promos/promo-locked-section.svg';

// ───────────── Social icons ─────────────
import socialDiscord from './social/discord.svg';
import socialTwitter from './social/twitter.svg';

// ───────────── Provider card SVGs (5 known + 29 numbered) ─────────────
import providerEvolution from './providers/01-evolution.svg';
import providerBigTimeGaming from './providers/02-big-time-gaming.svg';
import provider1x2Gaming from './providers/03-1x2-gaming.svg';
import provider7777Gaming from './providers/04-7777-gaming.svg';
import providerBetsoft from './providers/05-betsoft.svg';

// ───────────── Decorative icons ─────────────
import iconCherry from './icons/cherry.svg';
import iconHandshake from './icons/handshake.svg';
import iconBadgeCheck from './icons/badge-check.svg';
import iconLiveStreaming from './icons/live-streaming.svg';

// ───────────── Public exports ─────────────
export const covers = [cover01, cover02, cover03, cover04, cover05];
export const coverById = { 1: cover01, 2: cover02, 3: cover03, 4: cover04, 5: cover05 };

export const promoArt = {
  promo1: promoDoubleRewards,
  promo2: promoPokerFace,
  promo3: promoJackpot,
  promoLocked: promoLockedSection,
};

export const social = {
  social1: socialDiscord,
  social2: socialTwitter,
};

export const providers = [
  { name: 'Evolution', logo: providerEvolution },
  { name: 'Big Time Gaming', logo: providerBigTimeGaming },
  { name: '1X2gaming', logo: provider1x2Gaming },
  { name: '7777gaming', logo: provider7777Gaming },
  { name: 'Betsoft', logo: providerBetsoft },
];

export const iconArt = {
  cherry: iconCherry,
  handshake: iconHandshake,
  badgeCheck: iconBadgeCheck,
  liveStreaming: iconLiveStreaming,
};

// Pick a cover deterministically by index — used to cycle through the 5 available covers.
export function coverByIndex(i) {
  return covers[i % covers.length];
}
