import MobilesGrid from './MobilesGrid';
import { ProductsProvider } from '../context/ProductsContext';
import { fetchMobiles } from '../services/search';

export default async function MobilesPage() {
  const mobiles = await fetchMobiles();

  return (
    <ProductsProvider initialMobiles={mobiles}>
      <MobilesGrid />
    </ProductsProvider>
  );
}
