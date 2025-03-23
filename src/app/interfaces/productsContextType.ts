import { Mobile } from '../interfaces/mobileType';

export type ProductsContextType = {
  mobiles: Mobile[];
  searchedMobiles: Mobile[] | null;
  searchMobiles: (query: string) => Promise<void>;
  cart: Mobile[];
  addToCart: (mobile: Mobile) => void;
  removeFromCart: (id: string) => void;
};
