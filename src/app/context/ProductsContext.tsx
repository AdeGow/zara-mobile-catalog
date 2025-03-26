'use client';

import { useEffect, useRef, useState, useContext, createContext, ReactNode } from 'react';
import { API } from '../../lib/api';
import { deduplicateMobiles } from '../utils/deduplicateMobiles';
import { ProductsContextType } from '../interfaces/productsContextType';
import { CartItem } from '../interfaces/cartItemType';
import { Mobile } from '../interfaces/mobileType';

const CART_KEY = 'zara-mobile-cart';

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({
  children,
  initialMobiles = [],
}: {
  children: ReactNode;
  initialMobiles?: Mobile[];
}) => {
  const [mobiles] = useState<Mobile[]>(deduplicateMobiles(initialMobiles));
  const [searchedMobiles, setSearchedMobiles] = useState<Mobile[] | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lastQuery, setLastQuery] = useState<string>('');

  const searchCache = useRef<Map<string, Mobile[]>>(new Map());

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const searchMobiles = async (query: string) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === '') {
      setSearchedMobiles(null);
      setLastQuery('');
      return;
    }
    if (trimmedQuery === lastQuery) return;

    if (searchCache.current.has(trimmedQuery)) {
      const cached = searchCache.current.get(trimmedQuery);
      setSearchedMobiles(deduplicateMobiles(cached || []));
      setLastQuery(trimmedQuery);
      return;
    }

    try {
      const res = await API.get(`/products?search=${trimmedQuery}&limit=20`);
      const deduped = deduplicateMobiles(res.data);
      setSearchedMobiles(deduped);
      searchCache.current.set(trimmedQuery, deduped);
    } catch (err) {
      console.error('Search error:', err);
      setSearchedMobiles([]);
    }
  };

  const addToCart = (item: CartItem) => setCart((prev) => [...prev, item]);
  const removeFromCart = (id: string) => setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <ProductsContext.Provider
      value={{
        mobiles,
        searchedMobiles,
        searchMobiles,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) throw new Error('useProducts must be used within a ProductsProvider');
  return context;
};
