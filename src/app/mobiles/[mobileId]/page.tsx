import { fetchMobile } from '@/services/search';
import { MobilePageProps } from '@/interfaces/mobilePageProps';
import { notFound } from 'next/navigation';
import MobileDetail from '@/components/MobileDetail';

export default async function MobileDetailPage({ params }: MobilePageProps) {
  const mobile = await fetchMobile(params.mobileId);

  if (!mobile) {
    return notFound();
  }

  return <MobileDetail mobile={mobile} />;
}
