import Shell from '@/components/Shell';
import { Hero, Marquee, Manifesto, Challenge, WorkRail } from '@/components/SectionsA';
import { Proof, Transport, Support, Location, Contact, PeopleGrid } from '@/components/SectionsB';
import { teamFood, teamCentre } from '@/data/site';

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Marquee />
      <Manifesto />
      <Challenge />
      <WorkRail />
      <Proof />
      <PeopleGrid data={teamFood} id="team" />
      <PeopleGrid data={teamCentre} id="team-centre" plain />
      <Transport />
      <Support />
      <Location />
      <Contact />
    </Shell>
  );
}
