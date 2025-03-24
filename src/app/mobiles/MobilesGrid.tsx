'use client';

import { useProducts } from '../context/ProductsContext';
import MobileCard from '../components/MobileCard';
import { MobilesGridWrapper } from '../styles/mobilesGridStyles';

export default function MobilesGrid() {
  const { mobiles, searchedMobiles } = useProducts();
  const displayMobiles = searchedMobiles ?? mobiles;
  console.log(
    'Rendered Mobiles:',
    displayMobiles.map((m) => m.id),
  );
  const uniqueIds = new Set(displayMobiles.map((m) => m.id));
  console.log('Unique count:', uniqueIds.size, 'Rendered count:', displayMobiles.length);

  return (
    <MobilesGridWrapper>
      {displayMobiles.map((mobile) => (
        <MobileCard key={mobile.id} mobile={mobile} />
      ))}
    </MobilesGridWrapper>
  );
}
