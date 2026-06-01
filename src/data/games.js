import { coverByIndex } from '@/assets/images/index.js';

const TITLES = [
  'Old Gun', 'Cocktail Nights', 'Bow of Artemis', 'Big Wild Buffalo',
  'Elvis Frog in Vegas', 'Gold Magnate', 'Wild Frontier', 'Lucky Dice',
  'Royal Flush', 'Neon Heist', 'Dragon Reels', 'Phoenix Spin',
];

const GENRES = ['slots', 'live-casino', 'blackjack', 'baccarat', 'roulette', 'game-shows', 'originals'];
const TAGS_POOL = [
  ['high-volatility', 'late-night'],
  ['trending', 'top-picks'],
  ['originals', 'high-rollers'],
  ['new-releases', 'recently-played'],
  ['high-volatility', 'top-picks'],
  ['trending', 'late-night'],
  ['high-rollers', 'top-picks'],
  ['new-releases', 'trending'],
  ['recently-played', 'late-night'],
  ['high-volatility', 'high-rollers'],
  ['trending', 'originals'],
  ['top-picks', 'late-night'],
];

const PLAYED_LABELS = [
  '20m ago', '1hr ago', '4hr ago', '10hr ago', 'Yesterday',
  '2 days ago', '2 days ago', '3 days ago', '4 days ago', '1 week ago',
  '2 weeks ago', '1 month ago',
];

export const games = TITLES.map((title, i) => ({
  id: `game-${i + 1}`,
  title,
  cover: coverByIndex(i),
  genre: GENRES[i % GENRES.length],
  tags: TAGS_POOL[i],
  rating: +(4 + (i % 10) / 10).toFixed(1),
  price: i % 3 === 0 ? 0 : 4.99 + (i % 5),
  isOwned: i % 4 === 0,
  isWishlisted: false,
  lastPlayed: PLAYED_LABELS[i],
  isNew: i % 6 === 0,
  provider: ['Evolution', 'Big Time Gaming', '1X2gaming', '7777gaming', 'Betsoft'][i % 5],
}));

export const challenges = [
  {
    id: 'ch-1',
    title: 'Big Wild Buffalo',
    objective: 'First to get 2500x with a min. bet of 0.20 D1 Chips',
    prize: 250.0,
    expires: 'In 3 months',
    cover: coverByIndex(3),
  },
  {
    id: 'ch-2',
    title: 'Cocktail Nights',
    objective: 'First to get 2000x with a min. bet of 0.20 D1 Chips',
    prize: 250.0,
    expires: 'In 3 months',
    cover: coverByIndex(1),
  },
  {
    id: 'ch-3',
    title: 'Elvis Frog In Vegas',
    objective: 'First to get 2500x with a min. bet of $0.20',
    prize: 250.0,
    expires: 'In 3 months',
    cover: coverByIndex(4),
  },
  {
    id: 'ch-4',
    title: 'Old Gun',
    objective: 'Land 3 wild scatters in a single spin with a min. bet of 0.50',
    prize: 500.0,
    expires: 'In 2 months',
    cover: coverByIndex(0),
  },
  {
    id: 'ch-5',
    title: 'Bow of Artemis',
    objective: 'First to get 1500x with a min. bet of 0.10 D1 Chips',
    prize: 300.0,
    expires: 'In 6 weeks',
    cover: coverByIndex(2),
  },
  {
    id: 'ch-6',
    title: 'Gold Magnate',
    objective: 'Trigger 5 bonus rounds in a row with min. bet of 0.25',
    prize: 750.0,
    expires: 'In 1 month',
    cover: coverByIndex(5),
  },
  {
    id: 'ch-7',
    title: 'Wild Frontier',
    objective: 'First to win 1000x with any bet on free spins',
    prize: 400.0,
    expires: 'In 5 weeks',
    cover: coverByIndex(6),
  },
  {
    id: 'ch-8',
    title: 'Lucky Dice',
    objective: 'Roll three sixes in succession with min. bet of 0.20',
    prize: 200.0,
    expires: 'In 2 weeks',
    cover: coverByIndex(7),
  },
  {
    id: 'ch-9',
    title: 'Royal Flush',
    objective: 'Hit a royal flush with a min. bet of 1.00 D1 Chips',
    prize: 1000.0,
    expires: 'In 3 months',
    cover: coverByIndex(8),
  },
  {
    id: 'ch-10',
    title: 'Neon Heist',
    objective: 'First to get 3000x with a min. bet of 0.20 D1 Chips',
    prize: 600.0,
    expires: 'In 7 weeks',
    cover: coverByIndex(9),
  },
  {
    id: 'ch-11',
    title: 'Dragon Reels',
    objective: 'Collect 10 dragon symbols in a single session',
    prize: 350.0,
    expires: 'In 1 month',
    cover: coverByIndex(10),
  },
  {
    id: 'ch-12',
    title: 'Phoenix Spin',
    objective: 'Win 5 jackpots in a single play with min. bet 0.50',
    prize: 850.0,
    expires: 'In 3 months',
    cover: coverByIndex(11),
  },
];

export function getGamesByTag(tag) {
  return games.filter((g) => g.tags.includes(tag));
}

export function getGamesByGenre(genre) {
  return games.filter((g) => g.genre === genre);
}
