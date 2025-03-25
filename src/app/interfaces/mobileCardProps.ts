export type MobileCardItem = {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
};

export type MobileCardProps = {
  mobile: MobileCardItem;
};
