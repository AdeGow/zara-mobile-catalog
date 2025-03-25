import { fetchMobile } from '@/app/services/search';
import { MobilePageProps } from '@/app/interfaces/mobilePageProps';
import { notFound } from 'next/navigation';
import MobileDetail from '@/app/components/MobileDetail';

export default async function MobileDetailPage({ params }: MobilePageProps) {
  const mobile = await fetchMobile(params.mobileId);

  if (!mobile) {
    return notFound();
  }

  return (
    <MobileDetail mobile={mobile} />
  );
}
