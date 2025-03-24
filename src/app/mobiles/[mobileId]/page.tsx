import { fetchMobile } from '@/app/services/search';
import { MobilePageProps } from '@/app/interfaces/mobilePageProps';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function MobileDetailPage({ params }: MobilePageProps) {
  const mobile = await fetchMobile(params.mobileId);

  if (!mobile) {
    return notFound(); // Optional: render 404 page
  }

  return (
    <main>
      <h1>{mobile.name}</h1>
      <p>Brand: {mobile.brand}</p>
      <p>Price: €{mobile.basePrice}</p>
      <Image
        src={`${mobile.colorOptions[0]?.imageUrl}`}
        alt={mobile.name}
        width={300}
        height={400}
      />
    </main>
  );
}
