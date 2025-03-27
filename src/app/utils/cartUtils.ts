import { CartItem } from '../interfaces/cartItemType';

const CART_KEY = 'zara_cart';

const dispatchCartUpdated = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('cart-updated'));
  }
};

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCart(cart: CartItem[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    dispatchCartUpdated();
  }
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
}

export function removeFromCart(id: string) {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
}

export function clearCart() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CART_KEY);
    dispatchCartUpdated();
  }
}
