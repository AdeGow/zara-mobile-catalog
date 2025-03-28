import { fetchMobile } from '@/services/search';
import { notFound } from 'next/navigation';
import MobileDetail from '@/components/MobileDetail';

export default async function MobileDetailPage(props: { params: { mobileId: string } }) {
  const { mobileId } = await props.params;
  const mobile = await fetchMobile(mobileId);

  if (!mobile) {
    return notFound();
  }

  return <MobileDetail mobile={mobile} />;
}
