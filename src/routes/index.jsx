import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import ListPage from '@/pages/ListPage.jsx';
import ChallengesPage from '@/pages/ChallengesPage.jsx';
import ProvidersPage from '@/pages/ProvidersPage.jsx';
import AffiliatePage from '@/pages/AffiliatePage.jsx';
import BuyCoinsPage from '@/pages/BuyCoinsPage.jsx';
import VipPage from '@/pages/VipPage.jsx';
import WeeklyRacesPage from '@/pages/WeeklyRacesPage.jsx';
import WeeklyRacePage from '@/pages/WeeklyRacePage.jsx';
import LeaderboardPage from '@/pages/LeaderboardPage.jsx';
import StubPage from '@/pages/StubPage.jsx';

const all = () => true;
const byGenre = (g) => (game) => game.genre === g;
const byTag = (t) => (game) => game.tags.includes(t);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/recently-played"
        element={
          <ListPage
            title="Recently Played"
            subtitle="Pick up where you left off."
            filterFn={all}
          />
        }
      />
      <Route
        path="/trending"
        element={
          <ListPage
            title="Trending Games"
            subtitle="The hottest games on SUPREX this week."
            filterFn={byTag('trending')}
          />
        }
      />
      <Route
        path="/new-releases"
        element={
          <ListPage
            title="New Releases"
            subtitle="Fresh games just hit our shelves."
            filterFn={byTag('new-releases')}
          />
        }
      />
      <Route
        path="/music"
        element={
          <StubPage
            title="Music"
            description="Curated soundtracks while you play — coming soon."
          />
        }
      />

      <Route
        path="/originals"
        element={
          <ListPage
            title="SUPREX Originals"
            subtitle="Games built in-house by Division 1 Studios."
            filterFn={byGenre('originals')}
          />
        }
      />
      <Route
        path="/slots"
        element={<ListPage title="Slots" subtitle="Spin to win." filterFn={byGenre('slots')} />}
      />
      <Route
        path="/live-casino"
        element={
          <ListPage
            title="Live Casino"
            subtitle="Real dealers, real time."
            filterFn={byGenre('live-casino')}
          />
        }
      />
      <Route
        path="/game-shows"
        element={
          <ListPage
            title="Game Shows"
            subtitle="Interactive shows hosted live."
            filterFn={byGenre('game-shows')}
          />
        }
      />
      <Route
        path="/blackjack"
        element={<ListPage title="Blackjack" filterFn={byGenre('blackjack')} />}
      />
      <Route
        path="/baccarat"
        element={<ListPage title="Baccarat" filterFn={byGenre('baccarat')} />}
      />
      <Route
        path="/roulette"
        element={<ListPage title="Roulette" filterFn={byGenre('roulette')} />}
      />

      <Route path="/weekly-races" element={<WeeklyRacesPage />} />
      <Route path="/weekly-race" element={<WeeklyRacePage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/challenges" element={<ChallengesPage />} />
      <Route path="/vip-rewards" element={<VipPage />} />
      <Route path="/affiliate" element={<AffiliatePage />} />
      <Route path="/buy-coins" element={<BuyCoinsPage />} />
      <Route path="/providers" element={<ProvidersPage />} />
      <Route
        path="/live-support"
        element={
          <StubPage
            title="Live Support"
            description="Our team is online 24/7. Chat with us anytime."
          />
        }
      />

      <Route
        path="/profile"
        element={<StubPage title="Profile" description="Your stats and history." />}
      />
      <Route
        path="/settings"
        element={<StubPage title="Settings" description="Tune your SUPREX experience." />}
      />

      <Route
        path="*"
        element={<StubPage title="Page not found" description="Let's get you back home." />}
      />
    </Routes>
  );
}
