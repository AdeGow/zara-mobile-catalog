'use client';

import { useProducts } from '../context/ProductsContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../components/Button';
import {
  CartWrapper,
  EmptyMessage,
  CartList,
  CartItem,
  CartDetails,
  RemoveButton,
  TotalRow,
} from '../styles/cartStyles';

export default function CartPage() {
  const { cart, removeFromCart } = useProducts();
  const router = useRouter();

  console.log('Cart is:', cart);

  const total = cart.reduce((sum, item) => {
    return sum + (item.basePrice ?? 0);
  }, 0);

  return (
    <CartWrapper className="section-container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <EmptyMessage>Your cart is empty.</EmptyMessage>
      ) : (
        <>
          <CartList>
            {cart.map((item, index) => (
              <CartItem key={`${item.id}-${index}`}>
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
                  <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
                </CartDetails>
              </CartItem>
            ))}
          </CartList>

          <TotalRow>
            <strong>Total:</strong> {total.toFixed(2)} EUR
          </TotalRow>

          <Button variant="primary" onClick={() => router.push('/mobiles')}>
            Continuar comprando
          </Button>
        </>
      )}
    </CartWrapper>
  );
}
