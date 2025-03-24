import LayoutHeader from '../components/LayoutHeader';
import { ProductsProvider } from '../context/ProductsContext';
import { fetchMobiles } from '../services/search';

export default async function MobilesLayout({ children }: { children: React.ReactNode }) {
  const mobiles = await fetchMobiles();

  return (
    <ProductsProvider initialMobiles={mobiles}>
      <LayoutHeader />
      {children}
    </ProductsProvider>
  );
}
