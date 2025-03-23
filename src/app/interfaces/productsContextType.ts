import { Mobile } from '../interfaces/mobileType';

export type ProductsContextType = {
  mobiles: Mobile[];
  setMobiles: (mobiles: Mobile[]) => void;
  searchMobiles: (query: string) => Promise<void>;
  cart: Mobile[];
  addToCart: (mobile: Mobile) => void;
  removeFromCart: (id: string) => void;
};
