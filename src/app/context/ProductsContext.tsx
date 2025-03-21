'use client';

import { createContext, useState, useContext, ReactNode } from 'react';
import { ProductsContextType } from '../interfaces/productsContextType';
import { Mobile } from '../interfaces/mobileType';

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Mobile[]>([]);

  const addToCart = (mobile: Mobile) => {
    setCart((prev) => [...prev, mobile]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) throw new Error('useProducts must be used within a ProductsProvider');
  return context;
};
