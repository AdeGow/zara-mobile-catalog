'use client';

import React from 'react';
import Button from '@/components/UI/Button';
import { useRouter } from 'next/navigation';
import { HomepageContainer } from '@/styles/homepageStyles';

export default function HomepageContent() {
  const router = useRouter();

  return (
    <HomepageContainer>
      <p>Welcome to Zara's mobiles catalogue</p>
      <Button onClick={() => router.push('/mobiles')} variant="primary">
        Let's start
      </Button>
    </HomepageContainer>
  );
}
