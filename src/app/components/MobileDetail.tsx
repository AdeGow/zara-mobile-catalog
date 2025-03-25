'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MobileProps } from '../interfaces/mobileProps';
import Button from './Button';
import MobileCard from '../components/MobileCard';

import {
  MobileDetailContainer,
  MobileFeaturesWrapper,
  MobileImageWrapper,
  MobileFeaturesInfo,
  MobileSpecificationsContainer,
  SimilarItemsCarousel
} from '../styles/mobileDetailStyles';

export default function MobileDetail({ mobile }: MobileProps) {
  const router = useRouter();
  console.log('mobile is', mobile)

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

      <MobileDetailContainer>
        <MobileFeaturesWrapper>
          <MobileImageWrapper>
            <Image
              src={`${mobile.colorOptions[0]?.imageUrl}`}
              alt={`${mobile.name} image`}
              width={400}
              height={400}
            />
          </MobileImageWrapper>
          <MobileFeaturesInfo>
            <h1>{mobile.name}</h1>
            <p>From: {mobile.basePrice}EUR</p>
          </MobileFeaturesInfo>
        </MobileFeaturesWrapper>

        <MobileSpecificationsContainer>
          <p>Brand: {mobile.brand}</p>
        </MobileSpecificationsContainer>

        <SimilarItemsCarousel>
          {mobile.similarProducts?.map((mobile) => (
            <MobileCard key={mobile.id} mobile={mobile} />
          ))}
        </SimilarItemsCarousel>

      </MobileDetailContainer>
    </>
  );
}
