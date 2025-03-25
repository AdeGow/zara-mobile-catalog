'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MobileDetailProps } from '../interfaces/mobileDetailProps';
import Button from './Button';
import { MobileDetailWrapper } from '../styles/mobileDetailStyles';

export default function MobileDetail({ mobile }: MobileDetailProps) {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/mobiles')} variant="transparent">
        <Image
          src="/assets/chevron_left.svg"
          alt="back button icon"
          width={20}
          height={20}
        />
        Back
      </Button>
      <MobileDetailWrapper>
        <h1>{mobile.name}</h1>
        <p>Brand: {mobile.brand}</p>
        <p>Price: €{mobile.basePrice}</p>
        <Image
          src={`${mobile.colorOptions[0]?.imageUrl}`}
          alt={mobile.name}
          width={400}
          height={400}
        />
      </MobileDetailWrapper>
    </>
  );
}
