'use client';

import Image from 'next/image';
import { MobileCardProps } from '../interfaces/mobileCardProps';
import {
  AnimatedMobileCardWrapper,
  MobileCardWrapper,
  CardImageWrapper,
  CardInfoWrapper,
  MobileInfoRow,
  MobileName,
  MobilePrice,
} from '../styles/mobileCardStyles';

export default function Mobile({ mobile, parent }: MobileCardProps) {
  const Wrapper = parent === 'mobiles-grid' ? AnimatedMobileCardWrapper : MobileCardWrapper;

  return (
    <Wrapper href={`/mobiles/${mobile.id}`}>
      <CardImageWrapper>
        <Image
          src={mobile.imageUrl}
          alt={`${mobile.brand} ${mobile.name}`}
          className="mobile-card-img"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardImageWrapper>
      <CardInfoWrapper>
        <MobileInfoRow>
          <p className="mobile-card-brand">{mobile.brand}</p>
        </MobileInfoRow>
        <MobileInfoRow>
          <MobileName>{mobile.name}</MobileName>
          <MobilePrice>{mobile.basePrice?.toFixed(0)} EUR</MobilePrice>
        </MobileInfoRow>
      </CardInfoWrapper>
    </Wrapper>
  );
}
