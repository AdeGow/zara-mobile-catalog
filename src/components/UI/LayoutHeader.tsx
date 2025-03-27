'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/UI/Navbar';
import SearchProductBar from '@/components/UI/SearchProductBar';
import { LayoutHeaderWrapper } from '@/styles/UI/layoutHeaderStyles';

export default function LayoutHeader() {
  const path = usePathname();

  return (
    path !== '/' && (
      <LayoutHeaderWrapper>
        <Navbar />
        {path === '/mobiles' && <SearchProductBar />}
      </LayoutHeaderWrapper>
    )
  );
}
