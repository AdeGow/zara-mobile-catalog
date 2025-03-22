'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MobileCardProps } from '../interfaces/MobileCardProps';

export default function Mobile({ mobile }: MobileCardProps) {
  return (
    <Link
      href={`/mobiles/${mobile.id}`}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition p-4 h-full"
    >
      <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={mobile.imageUrl}
          alt={`${mobile.brand} ${mobile.name}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          width="500"
          height="500"
        />
      </div>
      <div className="mt-4 text-sm text-gray-600">{mobile.brand}</div>
      <div className="text-base font-semibold">{mobile.name}</div>
      <div className="mt-2 text-primary font-bold text-lg">€{mobile.basePrice.toFixed(2)}</div>
    </Link>
  );
}
