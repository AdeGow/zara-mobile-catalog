'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useProducts } from '../context/ProductsContext';
import { NavbarWrapper, NavItem } from '../styles/navbarStyles';
import { useHasMounted } from '../hooks/useHasMounted';

export default function Navbar() {
  const hasMounted = useHasMounted();
  const { cart } = useProducts();

  return (
    <NavbarWrapper>
      <NavItem>
        <Link href="/mobiles">
          <Image
            src="/assets/logo.svg"
            alt="MBST logo"
            className="navbar-logo-icon"
            priority={true}
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
            priority={true}
            width={200}
            height={200}
          />
          <span>{hasMounted ? cart.length : '0'}</span>
        </Link>
      </NavItem>
    </NavbarWrapper>
  );
}
