import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import { PageHero, PageCta } from '@/components/SectionsB';
import { RoadmapPath, RoadmapNumbers, MachineLadder, PyramidSection } from '@/components/Roadmap';
import { page } from '@/data/roadmap';

export const metadata: Metadata = {
  title: 'Self-sufficiency roadmap | Dar-e-Rehmat',
  description: 'How a woman learns to stitch in six months, becomes self-sufficient and trains others. Draft.',
};

export default function Page() {
  return (
    <Shell>
      <PageHero img={page.banner} title={page.title} sub={page.sub} />
      <RoadmapPath />
      <RoadmapNumbers />
      <MachineLadder />
      <PyramidSection />
      <PageCta />
    </Shell>
  );
}
