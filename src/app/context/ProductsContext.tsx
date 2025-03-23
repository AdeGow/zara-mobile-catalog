'use client';

import { API } from '../../lib/api';
import { createContext, useState, useContext, ReactNode } from 'react';
import { ProductsContextType } from '../interfaces/productsContextType';
import { Mobile } from '../interfaces/mobileType';

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({
  children,
  initialMobiles = [],
}: {
  children: ReactNode;
  initialMobiles?: Mobile[];
}) => {
  const [mobiles] = useState<Mobile[]>(initialMobiles);
  const [searchedMobiles, setSearchedMobiles] = useState<Mobile[] | null>(null);
  const [cart, setCart] = useState<Mobile[]>([]);

  const addToCart = (mobile: Mobile) => setCart((prev) => [...prev, mobile]);

  const removeFromCart = (id: string) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const searchMobiles = async (query: string) => {
    // Reset to initialMobiles if empty query
    if (query.trim() === '') {
      setSearchedMobiles(null);
      return;
    }

    try {
      const response = await API.get(`/products?search=${query}&limit=20`);
      setSearchedMobiles(response.data);
    } catch (error) {
      console.error('Error searching mobiles:', error);
      setSearchedMobiles([]);
    }
  };

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
