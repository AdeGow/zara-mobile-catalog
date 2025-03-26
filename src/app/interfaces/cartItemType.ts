import { Mobile, ColorOption, StorageOption } from './mobileType';

export type CartItem = Mobile & {
  selectedColor?: ColorOption;
  selectedStorage?: StorageOption;
};
