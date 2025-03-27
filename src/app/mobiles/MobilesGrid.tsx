'use client';

import { useProducts } from '../context/ProductsContext';
import MobileCard from '../components/MobileCard';
import EmptyMessage from '../components/EmptyMessage';
import { MobilesGridWrapper } from '../styles/mobilesGridStyles';

export default function MobilesGrid() {
  const { mobiles, searchedMobiles } = useProducts();
  const displayMobiles = searchedMobiles ?? mobiles;
  console.log(
    'Rendered Mobiles:',
    displayMobiles.map((m) => m.id),
  );

  return (
    <>
      {displayMobiles && displayMobiles.length === 0 ? (
        <EmptyMessage />
      ) : (
        <MobilesGridWrapper>
          {displayMobiles.map((mobile) => (
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
            />
          ))}
        </MobilesGridWrapper>
      )}
    </>
  );
}
