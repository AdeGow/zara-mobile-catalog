export type Specs = {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
};

export type ColorOption = {
  name: string;
  hexCode: string;
  imageUrl: string;
};

export type StorageOption = {
  capacity: string;
  price: number;
};

export type SimilarProduct = {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
};

export type Mobile = {
  id: string;
  brand: string;
  name: string;
  imageUrl: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: Specs;
  colorOptions: ColorOption[];
  storageOptions: StorageOption[];
  similarProducts: SimilarProduct[];
};
