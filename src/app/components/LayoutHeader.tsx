'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import SearchProductBar from './SearchProductBar';
import { LayoutHeaderWrapper } from '../styles/layoutHeaderStyles';

export default function LayoutHeader() {
  const path = usePathname();

  return (
    <LayoutHeaderWrapper>
      <Navbar />
      {path !== '/mobiles/[mobileId]' && <SearchProductBar />}
    </LayoutHeaderWrapper>
  );
}
