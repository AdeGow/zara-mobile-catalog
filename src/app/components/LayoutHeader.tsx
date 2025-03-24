'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import SearchProductBar from './SearchProductBar';
import { LayoutHeaderWrapper } from '../styles/layoutHeaderStyles';

export default function LayoutHeader() {
  const path = usePathname();
  const isDetailPage = /^\/mobiles\/[^/]+$/.test(path);

  return (
    <LayoutHeaderWrapper>
      <Navbar />
      {!isDetailPage && <SearchProductBar />}
    </LayoutHeaderWrapper>
  );
}
