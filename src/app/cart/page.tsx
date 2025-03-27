'use client';

import { useEffect, useState } from 'react';
import { getCart, removeFromCart } from '../utils/cartUtils';
import { CartItem } from '../interfaces/cartItemType';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../components/Button';
import {
  CartWrapper,
  EmptyMessage,
  CartList,
  StyledCartItem,
  CartDetails,
  RemoveButton,
  TotalRow,
} from '../styles/cartStyles';

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id: string) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const total = cart.reduce(
    (sum, item) => sum + (item.selectedStorage?.price ?? item.basePrice ?? 0),
    0,
  );

  return (
    <CartWrapper className="section-container">
      <h1>Shopping Cart</h1>

      {cart && cart.length === 0 ? (
        <EmptyMessage>Your cart is empty.</EmptyMessage>
      ) : (
        <>
          <CartList>
            {cart.map((item, index) => (
              <StyledCartItem key={`${item.id}-${index}`}>
                <Image
                  src={item.selectedColor?.imageUrl ?? item.imageUrl}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <CartDetails>
                  <h2>{item.name}</h2>
                  {item.selectedColor && (
                    <p>
                      <strong>Color:</strong> {item.selectedColor.name}
                    </p>
                  )}
                  {item.selectedStorage && (
                    <p>
                      <strong>Storage:</strong> {item.selectedStorage.capacity}
                    </p>
                  )}
                  <p>
                    <strong>Price:</strong> {item.selectedStorage?.price ?? item.basePrice} EUR
                  </p>
                  <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
                </CartDetails>
              </StyledCartItem>
            ))}
          </CartList>

          <TotalRow>
            <strong>Total:</strong> {total.toFixed(2)} EUR
          </TotalRow>

          <Button variant="secondary" onClick={() => router.push('/mobiles')}>
            Continue shopping
          </Button>
          <Button variant="primary">Pay</Button>
        </>
      )}
    </CartWrapper>
  );
}
