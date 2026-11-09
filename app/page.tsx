import Shell from '@/components/Shell';
import { Hero, Marquee, Manifesto, Challenge, WorkRail } from '@/components/SectionsA';
import { Proof, Transport, Support, Location, Contact } from '@/components/SectionsB';

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Marquee />
      <Manifesto />
      <Challenge />
      <WorkRail />
      <Proof />
      <Transport />
      <Support />
      <Location />
      <Contact />
    </Shell>
  );
}
