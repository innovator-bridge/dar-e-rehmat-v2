import Shell from '@/components/Shell';
import { Hero, Marquee, Manifesto, Challenge, Programmes } from '@/components/SectionsA';
import { Impact, Support, Location, Contact } from '@/components/SectionsB';

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Marquee />
      <Manifesto />
      <Challenge />
      <Programmes />
      <Impact />
      <Support />
      <Location />
      <Contact />
    </Shell>
  );
}
