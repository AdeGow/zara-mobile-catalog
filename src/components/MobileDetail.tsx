'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/utils/cartUtils';

import { StorageOption, ColorOption } from '@/interfaces/mobileType';
import { MobileProps } from '@/interfaces/mobileProps';
import { CartItem } from '@/interfaces/cartItemType';

import Button from '@/components/UI/Button';
import MobileCard from '@/components/UI/MobileCard';
import { DrawerContainer, DrawerContentWrapper } from '@/styles/UI/confirmationDrawerStyles';

import {
  MobileDetailContainer,
  MobileFeaturesWrapper,
  MobileImageWrapper,
  MobileFeaturesInfo,
  OptionsWrapper,
  ColorOptionSquare,
  ColorNameRow,
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
} from '@/styles/mobileDetailStyles';

export default function MobileDetail({ mobile }: MobileProps) {
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState<ColorOption>(mobile.colorOptions?.[0]);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption | null>(null);
  const [hoveredColor, setHoveredColor] = useState<ColorOption | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedStorage) return;

    const item: CartItem = {
      ...mobile,
      selectedColor,
      selectedStorage,
    };

    addToCart(item);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const formatSpecKey = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  };

  const renderSpecs = () => {
    if (!mobile.specs) return null;

    return Object.entries(mobile.specs).map(([key, value]) => (
      <SpecRow key={key}>
        <SpecName>
          <p className="small-text">{formatSpecKey(key)}</p>
        </SpecName>
        <SpecValue>
          <p className="small-text">{value}</p>
        </SpecValue>
      </SpecRow>
    ));
  };

  const displayColor = hoveredColor ?? selectedColor;

  return (
    <>
      {isDrawerOpen && (
        <DrawerContainer>
          <DrawerContentWrapper>
            <p>The product has been added to your cart.</p>
            <Button variant="primary" onClick={handleCloseDrawer}>
              Continue shopping
            </Button>
            <Button variant="secondary" onClick={() => router.push('/cart')}>
              Go to your cart
            </Button>
          </DrawerContentWrapper>
        </DrawerContainer>
      )}

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
              priority
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

            {/* Color options */}
            <OptionsWrapper>
              <p>Color. Pick your favorite.</p>
              <ColorsOptionsRow>
                {mobile.colorOptions.map((option) => (
                  <ColorOptionSquare
                    key={option.hexCode}
                    color={option.hexCode}
                    selected={selectedColor.hexCode === option.hexCode}
                    onClick={() => setSelectedColor(option)}
                    onMouseEnter={() => setHoveredColor(option)}
                    onMouseLeave={() => setHoveredColor(null)}
                  />
                ))}
              </ColorsOptionsRow>
              <ColorNameRow>
                <p>{displayColor?.name}</p>
              </ColorNameRow>
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
