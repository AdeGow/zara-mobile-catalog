'use client';

import { useProducts } from '../context/ProductsContext';
import MobileCard from '../components/MobileCard';
import { Mobile } from '../interfaces/mobileType';
import { MobilesGridWrapper } from '../styles/mobilesGridStyles';

export default function MobilesGrid() {
  const { mobiles } = useProducts();

  return (
    <MobilesGridWrapper>
      {mobiles.map((mobile: Mobile) => (
        <MobileCard key={mobile.id} mobile={mobile} />
      ))}
    </MobilesGridWrapper>
  );
}
