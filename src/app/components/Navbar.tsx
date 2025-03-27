'use client';

import { useEffect, useState } from 'react';
import { useHasMounted } from '../hooks/useHasMounted';
import Link from 'next/link';
import Image from 'next/image';
import { NavbarWrapper, NavItem } from '../styles/navbarStyles';

const CART_KEY = 'zara_cart';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const hasMounted = useHasMounted();

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem(CART_KEY);
      setCartCount(storedCart ? JSON.parse(storedCart).length : 0);
    };

    updateCartCount();

    window.addEventListener('cart-updated', updateCartCount);
    window.addEventListener('storage', updateCartCount); // for multi-tab sync

    return () => {
      window.removeEventListener('cart-updated', updateCartCount);
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <NavbarWrapper>
      <NavItem>
        <Link href="/mobiles">
          <Image
            src="/assets/logo.svg"
            alt="MBST logo"
            className="navbar-logo-icon"
            priority
            width={200}
            height={200}
          />
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/cart" className="navbar-cart-wrapper">
          <Image
            src="/assets/cart.svg"
            alt="Shopping cart icon"
            className="navbar-cart-icon"
            priority
            width={200}
            height={200}
          />
          <span>{hasMounted ? cartCount : '0'}</span>
        </Link>
      </NavItem>
    </NavbarWrapper>
  );
}
