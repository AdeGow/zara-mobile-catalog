'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MobileCardProps } from '../interfaces/MobileCardProps';
import { MobileCardWrapper } from '../styles/mobileCardStyles';

export default function Mobile({ mobile }: MobileCardProps) {
  return (
    <MobileCardWrapper>
      <Link href={`/mobiles/${mobile.id}`}>
        <div className="">
          <Image
            src={mobile.imageUrl}
            alt={`${mobile.brand} ${mobile.name}`}
            className=""
            width="20"
            height="20"
          />
        </div>
        <div className="">{mobile.brand}</div>
        <div className="">{mobile.name}</div>
        <div className="">€{mobile.basePrice.toFixed(2)}</div>
      </Link>
    </MobileCardWrapper>
  );
}
