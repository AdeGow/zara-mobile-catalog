import { Mobile } from './mobileType';
import { CartItem } from './cartItemType';

export type ProductsContextType = {
  mobiles: Mobile[];
  searchedMobiles: Mobile[] | null;
  searchMobiles: (query: string) => Promise<void>;
  cart: CartItem[];
  addToCart: (mobile: CartItem) => void;
  removeFromCart: (id: string) => void;
};
