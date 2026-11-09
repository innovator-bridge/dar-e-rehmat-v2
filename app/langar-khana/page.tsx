import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import { PageHero, LangarIntro, PeopleGrid, PhotoWall, PageCta } from '@/components/SectionsB';
import { langar, teamFood } from '@/data/site';

export const metadata: Metadata = {
  title: 'Langar Khana | Dar-e-Rehmat',
  description: 'A hot midday meal for 280 to 300 people every day in Rajajang. Demo version.',
};

export default function Page() {
  return (
    <Shell>
      <PageHero img={langar.banner} title={langar.pageTitle} sub={langar.pageSub} />
      <LangarIntro />
      <PeopleGrid data={teamFood} id="team" />
      <PhotoWall eyebrow={langar.galleryEyebrow} title={langar.galleryTitle} items={langar.gallery} id="gallery" />
      <PageCta />
    </Shell>
  );
}
