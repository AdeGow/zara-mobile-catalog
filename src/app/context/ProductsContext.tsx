'use client';

import { useEffect, useRef, useState, useContext, createContext, ReactNode } from 'react';
import { API } from '../../lib/api';
import { deduplicateMobiles } from '../utils/deduplicateMobiles';
import { ProductsContextType } from '../interfaces/productsContextType';
import { Mobile } from '../interfaces/mobileType';

const TARGET_MOBILE_COUNT = 20;
const FETCH_LIMIT = 20;

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({
  children,
  initialMobiles = [],
}: {
  children: ReactNode;
  initialMobiles?: Mobile[];
}) => {
  const [mobiles, setMobiles] = useState<Mobile[]>([]);
  const [searchedMobiles, setSearchedMobiles] = useState<Mobile[] | null>(null);
  const [lastQuery, setLastQuery] = useState<string>('');

  const searchCache = useRef<Map<string, Mobile[]>>(new Map());

  // Refill mobiles if deduplicated count < TARGET_MOBILE_COUNT
  useEffect(() => {
    const init = async () => {
      const deduplicated = deduplicateMobiles(initialMobiles);
      let allMobiles = [...deduplicated];

      if (deduplicated.length < TARGET_MOBILE_COUNT) {
        const missingCount = TARGET_MOBILE_COUNT - deduplicated.length;
        const offset = initialMobiles.length;
        console.log('missing count', missingCount, 'offset is:', offset)

        try {
          const response = await API.get(`/products?limit=${missingCount}&offset=${offset}`);
          const moreMobiles = response.data || [];

          const combined = deduplicateMobiles([...deduplicated, ...moreMobiles]);
          allMobiles = combined.slice(0, TARGET_MOBILE_COUNT); // force a max of 20
        } catch (error) {
          console.error('Error fetching more mobiles:', error);
        }
      }

      setMobiles(allMobiles);
    };

    init();
  }, [initialMobiles]);

  const searchMobiles = async (query: string) => {
    const trimmedQuery = query.trim();
    // Reset if empty query
    if (trimmedQuery === '') {
      setSearchedMobiles(null);
      setLastQuery('');
      return;
    }

    // Skip API call if same query
    if (trimmedQuery === lastQuery) return;

    // Check cache first
    if (searchCache.current.has(trimmedQuery)) {
      console.log('Using cached data');
      const cached = searchCache.current.get(trimmedQuery);
      setSearchedMobiles(deduplicateMobiles(cached || []));
      setLastQuery(trimmedQuery);
      return;
    }

    try {
      console.log('Data not cached, fetching data from API');
      const response = await API.get(`/products?search=${trimmedQuery}&limit=${FETCH_LIMIT}`);
      const deduplicated = deduplicateMobiles(response.data || []);
      setSearchedMobiles(deduplicated);
      // Store in cache
      searchCache.current.set(trimmedQuery, deduplicated);
    } catch (error) {
      console.error('Error searching mobiles:', error);
      setSearchedMobiles([]);
    }

    setLastQuery(trimmedQuery);
  };

  return (
    <ProductsContext.Provider
      value={{
        mobiles,
        searchedMobiles,
        searchMobiles,
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
