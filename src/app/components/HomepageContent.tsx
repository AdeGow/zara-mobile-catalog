'use client';

import React from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { HomepageContainer } from '../styles/homepageStyles';

export default function HomepageContent() {
  const router = useRouter();

  return (
    <HomepageContainer>
      <p>Bienvenidxs al Catálogo Zara de Móviles</p>
      <Button onClick={() => router.push('/mobiles')} variant="primary">
        Empezar la experiencia
      </Button>
    </HomepageContainer>
  );
}
