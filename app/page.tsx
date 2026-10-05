// app/page.tsx
import Hero from '@/app/components/hero';
import BelowHero from '@/app/components/BelowHero';
import NewProjects from '@/app/components/NewProjects';
import PopularSearches from '@/app/components/PopularSearches';
import LearnMore from '@/app/components/LearnMore';

export default function Home() {
  return (
    // <main> ki jagah <div> use kiya hai
    <div className="w-full bg-gray-50 flex flex-col">
      <Hero />
      <BelowHero />
      <NewProjects />
      <PopularSearches />
      <LearnMore />
    </div>
  );
}