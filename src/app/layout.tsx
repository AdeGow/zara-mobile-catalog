import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zara Mobile Catalog | Buy Apple and Samsung smartphones',
  description:
    'Buy online the latest Apple and Samsung smartphones at the best price directly in Zara Mobile Catalog. Select your favorite brand or find your perfect match by filtering colors and storage options.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
