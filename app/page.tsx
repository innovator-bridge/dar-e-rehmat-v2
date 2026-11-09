import Shell from '@/components/Shell';
import { Hero, Marquee, Manifesto, Challenge, WorkRail, Model } from '@/components/SectionsA';
import { Proof, Transport, Support, Location, Contact, PeopleGrid, PhotoWall, Teacher } from '@/components/SectionsB';
import { teamFood, teamCentre, centre } from '@/data/site';

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
      <Model />
      <PhotoWall eyebrow={centre.garmentsEyebrow} title={centre.garmentsTitle} items={centre.garments} id="garments" tone="mist" />
      <PeopleGrid data={teamCentre} id="team-centre" plain />
      <Teacher />
      <Transport />
      <Support />
      <Location />
      <Contact />
    </Shell>
  );
}
