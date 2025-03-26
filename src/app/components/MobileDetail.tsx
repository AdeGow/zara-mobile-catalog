'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useProducts } from '../context/ProductsContext';
import { StorageOption, ColorOption } from '../interfaces/mobileType';
import { MobileProps } from '../interfaces/mobileProps';
import Button from './Button';
import MobileCard from '../components/MobileCard';

import {
  MobileDetailContainer,
  MobileFeaturesWrapper,
  MobileImageWrapper,
  MobileFeaturesInfo,
  OptionsWrapper,
  ColorOptionSquare,
  StorageOptionsRow,
  ColorsOptionsRow,
  StorageOptionButton,
  AddToCartButtonWrapper,
  MobileSpecificationsContainer,
  SpecRow,
  SpecName,
  SpecValue,
  SimilarItemsContainer,
  SimilarItemsCarousel,
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

  const formatSpecKey = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  };

  const renderSpecs = () => {
    if (!mobile.specs) return null;

    return Object.entries(mobile.specs).map(([key, value]) => (
      <SpecRow key={key}>
        <SpecName>
          <p>{formatSpecKey(key)}</p>
        </SpecName>
        <SpecValue>
          <p>{value}</p>
        </SpecValue>
      </SpecRow>
    ));
  };

  console.log('mobile is', mobile);

  return (
    <>
      <div className="section-container">
        <Button onClick={() => router.push('/mobiles')} variant="transparent">
          <Image src="/assets/chevron_left.svg" alt="back button icon" width={20} height={20} />
          Back
        </Button>
      </div>

      <MobileDetailContainer>
        <MobileFeaturesWrapper className="section-container">
          <MobileImageWrapper>
            <Image
              src={selectedColor.imageUrl}
              alt={`${mobile.name} image`}
              width={230}
              height={230}
            />
          </MobileImageWrapper>
          <MobileFeaturesInfo>
            <h1>{mobile.name}</h1>
            <p>
              {selectedStorage ? `${selectedStorage.price} EUR` : `From ${mobile.basePrice} EUR`}
            </p>
            <OptionsWrapper>
              <p>Storage ¿How much space do you need?</p>
              <StorageOptionsRow>
                {mobile.storageOptions.map((option) => (
                  <StorageOptionButton
                    key={option.capacity}
                    selected={selectedStorage?.capacity === option.capacity}
                    onClick={() => setSelectedStorage(option)}
                  >
                    {option.capacity}
                  </StorageOptionButton>
                ))}
              </StorageOptionsRow>
            </OptionsWrapper>

            <OptionsWrapper>
              <p>Color. Pick your favorite.</p>
              <ColorsOptionsRow>
                {/* Color options */}
                {mobile.colorOptions.map((option) => (
                  <ColorOptionSquare
                    key={option.hexCode}
                    color={option.hexCode}
                    selected={selectedColor.hexCode === option.hexCode}
                    onClick={() => setSelectedColor(option)}
                  />
                ))}
              </ColorsOptionsRow>
            </OptionsWrapper>
            <AddToCartButtonWrapper>
              <Button
                variant={selectedColor && selectedStorage ? 'primary' : 'disabled'}
                onClick={handleAddToCart}
                disabled={!selectedColor || !selectedStorage}
              >
                Add to Cart
              </Button>
            </AddToCartButtonWrapper>
          </MobileFeaturesInfo>
        </MobileFeaturesWrapper>

        <MobileSpecificationsContainer className="section-container">
          <h2>Specifications</h2>
          <SpecRow>
            <SpecName>
              <p>Brand</p>
            </SpecName>
            <SpecValue>
              <p>{mobile.brand}</p>
            </SpecValue>
          </SpecRow>

          <SpecRow>
            <SpecName>
              <p>Name</p>
            </SpecName>
            <SpecValue>
              <p>{mobile.name}</p>
            </SpecValue>
          </SpecRow>

          <SpecRow>
            <SpecName>
              <p>Description</p>
            </SpecName>
            <SpecValue>
              <p>{mobile.description}</p>
            </SpecValue>
          </SpecRow>

          {renderSpecs()}
        </MobileSpecificationsContainer>

        <SimilarItemsContainer>
          <h2 className="section-container">Similar items</h2>
          <SimilarItemsCarousel>
            {mobile.similarProducts?.map((product) => (
              <MobileCard
                key={product.id}
                parent="mobile-detail"
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
        </SimilarItemsContainer>
      </MobileDetailContainer>
    </>
  );
}
