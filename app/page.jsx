import Hero from "./components/hero";

import LearnMore from "./components/LearnMore";
import NewProjects from "./components/NewProjects";
import PopularSearches from "./components/PopularSearches";
import BelowHero from "./components/BelowHero";
import StatsBar from "./components/StatsBar";
import Why3GRealtors from "./components/Why3GRealtors";
import AgentsSection from "./components/AgentsSection";

export default function Home() {
  return (
    <div className="w-full bg-gray-50 flex flex-col">
      <Hero />
      <StatsBar />
      <BelowHero />
      <NewProjects />
      <PopularSearches />
      <Why3GRealtors />
      <LearnMore />
      <AgentsSection />
    </div>
  );
}
