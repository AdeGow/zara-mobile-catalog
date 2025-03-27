import { Mobile } from './mobileType';

export type ProductsContextType = {
  mobiles: Mobile[];
  searchedMobiles: Mobile[] | null;
  searchMobiles: (query: string) => Promise<void>;
};
