import MobilesGrid from './MobilesGrid';
import { ProductsProvider } from '../context/ProductsContext';
import { fetchMobiles } from '../services/search';
import Navbar from '../components/Navbar';

export default async function MobilesPage() {
  const mobiles = await fetchMobiles();

  return (
    <ProductsProvider initialMobiles={mobiles}>
      <Navbar />
      <MobilesGrid />
    </ProductsProvider>
  );
}
