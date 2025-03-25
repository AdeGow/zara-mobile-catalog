'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useProducts } from '../context/ProductsContext';
import { StorageOption, ColorOption, SimilarProduct } from '../interfaces/mobileType';
import { MobileProps } from '../interfaces/mobileProps';
import Button from './Button';
import MobileCard from '../components/MobileCard';

import {
  MobileDetailContainer,
  MobileFeaturesWrapper,
  MobileImageWrapper,
  MobileFeaturesInfo,
  MobileSpecificationsContainer,
  SimilarItemsCarousel,
  OptionsWrapper,
  ColorOptionSquare,
  StorageOptionButton,
} from '../styles/mobileDetailStyles';

export default function MobileDetail({ mobile }: MobileProps) {
  const router = useRouter();
  const { addToCart } = useProducts();

  const [selectedColor, setSelectedColor] = useState<ColorOption>(mobile.colorOptions?.[0]);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption | null>(null);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedStorage) return;

    const item = {
      ...mobile,
      selectedColor,
      selectedStorage,
    };

    addToCart(item);
  };

  console.log('mobile is', mobile);

  return (
    <>
      <Button onClick={() => router.push('/mobiles')} variant="transparent">
        <Image src="/assets/chevron_left.svg" alt="back button icon" width={20} height={20} />
        Back
      </Button>

      <MobileDetailContainer>
        <MobileFeaturesWrapper>
          <MobileImageWrapper>
            <Image
              src={selectedColor.imageUrl}
              alt={`${mobile.name} image`}
              width={400}
              height={400}
            />
          </MobileImageWrapper>
          <MobileFeaturesInfo>
            <h1>{mobile.name}</h1>
            <p>
              {selectedStorage ? `${selectedStorage.price} EUR` : `From ${mobile.basePrice} EUR`}
            </p>
            <OptionsWrapper>
              <p>Storage ¿How much space do you need?</p>
              {mobile.storageOptions?.map((option) => (
                <StorageOptionButton
                  key={option.capacity}
                  selected={selectedStorage?.capacity === option.capacity}
                  onClick={() => setSelectedStorage(option)}
                >
                  {option.capacity}
                </StorageOptionButton>
              ))}
            </OptionsWrapper>

            <OptionsWrapper>
              <p>Color. Pick your favorite.</p>
              {/* Color options */}
              {mobile.colorOptions?.map((option) => (
                <ColorOptionSquare
                  key={option.hexCode}
                  color={option.hexCode}
                  selected={selectedColor.hexCode === option.hexCode}
                  onClick={() => setSelectedColor(option)}
                />
              ))}
            </OptionsWrapper>
            <Button
              variant="primary"
              onClick={handleAddToCart}
              disabled={!selectedColor || !selectedStorage}
            >
              Add to Cart
            </Button>
          </MobileFeaturesInfo>
        </MobileFeaturesWrapper>

        <MobileSpecificationsContainer>
          <p>Brand: {mobile.brand}</p>
        </MobileSpecificationsContainer>

        <SimilarItemsCarousel>
          {mobile.similarProducts?.map((product) => (
            <MobileCard
              key={product.id}
              mobile={{
                id: product.id,
                brand: product.brand,
                name: product.name,
                basePrice: product.basePrice,
                imageUrl: product.imageUrl,
              }}
            />
          ))}
        </SimilarItemsCarousel>
      </MobileDetailContainer>
    </>
  );
}
