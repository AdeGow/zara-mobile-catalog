'use client';

import { useProducts } from '../context/ProductsContext';
import MobileCard from '../components/MobileCard';
import { Mobile } from '../interfaces/mobileType';

export default function MobilesGrid() {
  const { mobiles } = useProducts();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {mobiles.map((mobile: Mobile) => (
        <MobileCard key={mobile.id} mobile={mobile} />
      ))}
    </div>
  );
}
