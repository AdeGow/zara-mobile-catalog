import type { Metadata } from 'next';
import LayoutHeader from '@/components/UI/LayoutHeader';
import { fetchMobiles } from '@/services/search';
import { ProductsProvider } from '@/context/ProductsContext';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zara Mobile Catalog | Buy Apple and Samsung smartphones',
  description:
    'Buy online the latest Apple and Samsung smartphones at the best price directly in Zara Mobile Catalog. Select your favorite brand or find your perfect match by filtering colors and storage options.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mobiles = await fetchMobiles();

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ProductsProvider initialMobiles={mobiles}>
            <LayoutHeader />
            {children}
          </ProductsProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
