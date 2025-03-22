import { Mobile } from '../interfaces/mobileType';

export type ProductsContextType = {
  mobiles: Mobile[];
  setMobiles: (mobiles: Mobile[]) => void;
  cart: Mobile[];
  addToCart: (mobile: Mobile) => void;
  removeFromCart: (id: string) => void;
};
