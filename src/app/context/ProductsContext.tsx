'use client';

import { API } from '../../lib/api';
import { createContext, useState, useContext, useRef, ReactNode } from 'react';
import { ProductsContextType } from '../interfaces/productsContextType';
import { Mobile } from '../interfaces/mobileType';
import { deduplicateMobiles } from '../utils/deduplicateMobiles';

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
  const [cart, setCart] = useState<Mobile[]>([]);
  const [lastQuery, setLastQuery] = useState<string>('');

  const searchCache = useRef<Map<string, Mobile[]>>(new Map());

  const searchMobiles = async (query: string) => {
    const trimmedQuery = query.trim();
    console.log('SearchMobile with query as:', query, 'last query is', lastQuery);

    // Reset if empty query
    if (trimmedQuery === '') {
      console.log('Query empty, reset data');
      setSearchedMobiles(null);
      setLastQuery('');
      return;
    }

    // Skip API call if same query
    if (trimmedQuery === lastQuery) {
      console.log('Same query, skipping fetch data');
      return;
    }

    // Check cache first
    if (searchCache.current.has(trimmedQuery)) {
      console.log('SearchMobile with query as:', query, 'last query is', lastQuery);
      console.log('Using cached data');
      const cachedMobiles = searchCache.current.get(trimmedQuery);
      const deduplicatedMobiles = deduplicateMobiles(cachedMobiles || []);
      setSearchedMobiles(deduplicatedMobiles);
      setLastQuery(trimmedQuery);
      return;
    }

    // If not cached: fetch from API
    try {
      console.log('Data not cached, fetching data from API');
      const response = await API.get(`/products?search=${trimmedQuery}&limit=20`);
      const deduplicatedMobiles = deduplicateMobiles(response.data);

      setSearchedMobiles(deduplicatedMobiles);
      // Store in cache
      searchCache.current.set(trimmedQuery, deduplicatedMobiles);
    } catch (error) {
      console.error('Error searching mobiles:', error);
      setSearchedMobiles([]);
      setLastQuery(trimmedQuery);
    }
  };

  const addToCart = (mobile: Mobile) => setCart((prev) => [...prev, mobile]);

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
