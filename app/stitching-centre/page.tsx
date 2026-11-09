import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import { Model } from '@/components/SectionsA';
import { PageHero, PeopleGrid, PhotoWall, Teacher, Clips, PageCta } from '@/components/SectionsB';
import { centre, teamCentre } from '@/data/site';

export const metadata: Metadata = {
  title: 'Stitching Centre | Dar-e-Rehmat',
  description: 'Women and girls learn to stitch and become self-sufficient. Dar-e-Rehmat, Rajajang. Demo version.',
};

export default function Page() {
  return (
    <Shell>
      <PageHero img={centre.banner} title={centre.pageTitle} sub={centre.pageSub} />
      <Model />
      <PhotoWall eyebrow={centre.garmentsEyebrow} title={centre.garmentsTitle} items={centre.garments} id="garments" tone="mist" />
      <PeopleGrid data={teamCentre} id="team" plain />
      <Teacher />
      <Clips />
      <PhotoWall eyebrow={centre.galleryEyebrow} title={centre.galleryTitle} items={centre.gallery} id="gallery" />
      <PageCta />
    </Shell>
  );
}
