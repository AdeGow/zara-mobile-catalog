'use client';

import { useEffect, useState } from 'react';
import { getCart, removeFromCart } from '../utils/cartUtils';
import { CartItem } from '../interfaces/cartItemType';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../components/Button';
import EmptyMessage from '../components/EmptyMessage';
import {
  CartWrapper,
  CartList,
  StyledCartItem,
  CartItemDetails,
  CartImageWrapper,
  RemoveButton,
  TotalPriceRow,
  CartButtonsRow,
  CartButtonWrapper,
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
      {cart && cart.length === 0 ? (
        <EmptyMessage />
      ) : (
        <>
          <h1>Cart ({cart.length})</h1>
          <CartList>
            {cart.map((item, index) => (
              <StyledCartItem key={`${item.id}-${index}`}>
                <CartImageWrapper>
                  <Image
                    src={item.selectedColor?.imageUrl ?? item.imageUrl}
                    alt={item.name}
                    width={200}
                    height={200}
                  />
                </CartImageWrapper>
                <CartItemDetails>
                  <div>
                    <p className="cart-item-name">{item.name}</p>
                    <p>
                      {item.selectedStorage && item.selectedStorage.capacity} |{' '}
                      {item.selectedColor && item.selectedColor.name}
                    </p>
                    <p>{item.selectedStorage?.price ?? item.basePrice} EUR</p>
                  </div>
                  <div>
                    <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
                  </div>
                </CartItemDetails>
              </StyledCartItem>
            ))}
          </CartList>

          <TotalPriceRow>
            <h2>Total:</h2>
            <h2>{total.toFixed(0)} EUR</h2>
          </TotalPriceRow>

          <CartButtonsRow>
            <CartButtonWrapper>
              <Button variant="secondary" onClick={() => router.push('/mobiles')}>
                Continue shopping
              </Button>
            </CartButtonWrapper>
            <CartButtonWrapper>
              <Button variant="primary">Pay</Button>
            </CartButtonWrapper>
          </CartButtonsRow>
        </>
      )}
    </CartWrapper>
  );
}
