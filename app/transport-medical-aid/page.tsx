import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import { PageHero, TransportDetails, TransportMap, TransportMedia, PageCta } from '@/components/SectionsB';
import { transport } from '@/data/site';

export const metadata: Metadata = {
  title: 'Transport and Medical Aid | Dar-e-Rehmat',
  description: 'A daily van to hospital for patients from Rajajang. Dar-e-Rehmat demo version.',
};

export default function Page() {
  return (
    <Shell>
      <PageHero img={transport.banner} title={transport.pageTitle} sub={transport.pageSub} />
      <TransportDetails />
      <TransportMap />
      <TransportMedia />
      <PageCta />
    </Shell>
  );
}
