'use client';

import { useEffect, useState } from 'react';
import { getCart, removeFromCart } from '@/utils/cartUtils';
import { CartItem } from '@/interfaces/cartItemType';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import {
  CartWrapper,
  CartList,
  StyledCartItem,
  CartItemDetails,
  CartImageWrapper,
  RemoveButton,
  TotalPriceRow,
  CartFooter,
  CartButtonsRow,
  CartButtonWrapper,
  InlineCartFooter,
  InlinePaymentWrapper,
  InlineTotalPriceRow,
  InlineCartButtonWrapper,
} from '@/styles/cartStyles';

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

      {/* Mobile Footer */}
      <CartFooter className="mobile-footer">
        <TotalPriceRow>
          <h3>Total:</h3>
          <h3>{total.toFixed(0)} EUR</h3>
        </TotalPriceRow>
        <CartButtonsRow>
          <CartButtonWrapper style={{ width: cart.length === 0 ? '100%' : '50%' }}>
            <Button variant="secondary" onClick={() => router.push('/mobiles')}>
              Continue shopping
            </Button>
          </CartButtonWrapper>
          {cart.length > 0 && (
            <CartButtonWrapper style={{ width: '50%' }}>
              <Button variant="primary">Pay</Button>
            </CartButtonWrapper>
          )}
        </CartButtonsRow>
      </CartFooter>

      {/* Tablet & Desktop Footer */}
      <InlineCartFooter className="desktop-footer">
        <InlineCartButtonWrapper>
          <Button variant="secondary" onClick={() => router.push('/mobiles')}>
            Continue shopping
          </Button>
        </InlineCartButtonWrapper>

        {cart.length > 0 && (
          <InlinePaymentWrapper>
            <InlineTotalPriceRow>
              <h3>Total:</h3>
              <h3>{total.toFixed(0)} EUR</h3>
            </InlineTotalPriceRow>
            <Button variant="primary">Pay</Button>
          </InlinePaymentWrapper>
        )}
      </InlineCartFooter>
    </CartWrapper>
  );
}
