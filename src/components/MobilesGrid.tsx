'use client';

import { useProducts } from '@/context/ProductsContext';
import MobileCard from '@/components/UI/MobileCard';
import EmptyMessage from '@/components/UI/EmptyMessage';
import { MobilesGridWrapper } from '@/styles/mobilesGridStyles';

export default function MobilesGrid() {
  const { mobiles, searchedMobiles } = useProducts();
  const displayMobiles = searchedMobiles ?? mobiles;

  return (
    <>
      {displayMobiles && displayMobiles.length === 0 ? (
        <EmptyMessage />
      ) : (
        <MobilesGridWrapper>
          {displayMobiles.map((mobile, index) => (
            <MobileCard
              key={mobile.id}
              parent="mobiles-grid"
              mobile={{
                id: mobile.id,
                brand: mobile.brand,
                name: mobile.name,
                basePrice: mobile.basePrice,
                imageUrl: mobile.imageUrl,
              }}
              priority={index < 10}
            />
          ))}
        </MobilesGridWrapper>
      )}
    </>
  );
}
