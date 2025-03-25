'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MobileCardProps } from '../interfaces/MobileCardProps';
import { MobileCardWrapper, CardImageWrapper, CardInfoWrapper } from '../styles/mobileCardStyles';

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
        <div className="">{mobile.brand}</div>
        <div className="">{mobile.name}</div>
        <div className="">€{mobile.basePrice.toFixed(2)}</div>
      </CardInfoWrapper>
    </MobileCardWrapper>
  );
}
