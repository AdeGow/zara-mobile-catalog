'use client';

import Navbar from './Navbar';
import SearchProductBar from './SearchProductBar';
import { LayoutHeaderWrapper } from '../styles/layoutHeaderStyles';

export default function LayoutHeader() {
  return (
    <LayoutHeaderWrapper>
      <Navbar />
      <SearchProductBar />
    </LayoutHeaderWrapper>
  );
}
