import { Mobile } from '../interfaces/mobileType';

export type ProductsContextType = {
  cart: Mobile[];
  addToCart: (mobile: Mobile) => void;
  removeFromCart: (id: string) => void;
};
