// app/page.tsx
import Hero from "./components/hero";


import LearnMore from "./components/LearnMore";
import NewProjects from "./components/NewProjects";
import PopularSearches from "./components/PopularSearches";
import BelowHero from "./components/BelowHero";


export default function Home() {
  return (
    <div className="w-full bg-gray-50 flex flex-col">
      <Hero />
<BelowHero/ >
      <NewProjects />
      <PopularSearches />
     <LearnMore />
    </div>
  );
}