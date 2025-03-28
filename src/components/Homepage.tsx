'use client';

import React from 'react';
import Button from '@/components/UI/Button';
import { useRouter } from 'next/navigation';
import { HomepageContainer } from '@/styles/homepageStyles';

export default function HomepageContent() {
  const router = useRouter();

  return (
    <HomepageContainer>
      <p>Welcome to Zara Mobiles Catalogue</p>
      <br />
      <Button onClick={() => router.push('/mobiles')} variant="primary">
        Let&apos;s start
      </Button>
    </HomepageContainer>
  );
}
