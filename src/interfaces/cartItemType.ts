import { Mobile, ColorOption, StorageOption } from '@/interfaces/mobileType';

export type CartItem = Mobile & {
  selectedColor?: ColorOption;
  selectedStorage?: StorageOption;
};
