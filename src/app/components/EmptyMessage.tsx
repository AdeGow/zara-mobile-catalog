import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Button from './Button';
import { StyledEmptyMessage } from '../styles/emptyMessageStyles';

export default function EmptyMessage() {
  const path = usePathname();
  const router = useRouter();

  return (
    <div>
      <StyledEmptyMessage>
        {path === '/cart' ? (
          <>
            <p>Your cart is empty.</p>
            <p>Your next cutting edge smartphone is just waiting for your!</p>
            <Button variant="secondary" onClick={() => router.push('/mobiles')}>
              Search mobiles
            </Button>
          </>
        ) : (
          <p>No products to display.</p>
        )}
      </StyledEmptyMessage>
    </div>
  );
}
