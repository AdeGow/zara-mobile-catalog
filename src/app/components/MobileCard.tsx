'use client';

import Image from 'next/image';
import { MobileCardProps } from '../interfaces/mobileCardProps';
import {
  MobileCardWrapper,
  CardImageWrapper,
  CardInfoWrapper,
  MobileInfoRow,
  MobileName,
  MobilePrice,
} from '../styles/mobileCardStyles';

export default function Mobile({ mobile }: MobileCardProps) {
  return (
    <MobileCardWrapper href={`/mobiles/${mobile.id}`}>
      <CardImageWrapper>
        <Image
          src={mobile.imageUrl}
          alt={`${mobile.brand} ${mobile.name}`}
          className="mobile-card-img"
          fill
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
    </MobileCardWrapper>
  );
}
