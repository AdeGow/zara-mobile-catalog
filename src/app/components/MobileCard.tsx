'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MobileCardProps } from '../interfaces/MobileCardProps';

export default function Mobile({ mobile }: MobileCardProps) {
  return (
    <Link href={`/mobiles/${mobile.id}`} className="">
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
  );
}
