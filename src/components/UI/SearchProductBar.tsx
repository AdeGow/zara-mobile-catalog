'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useProducts } from '@/context/ProductsContext';
import {
  SearchInputWrapper,
  SearchInput,
  SearchResultsCount,
} from '@/styles/UI/searchProductBarStyles';

export default function SearchProductBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const { mobiles, searchMobiles, searchedMobiles } = useProducts();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  const handleClearInput = () => {
    setSearchQuery('');
    searchMobiles('');
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.trim().length > 0) {
        searchMobiles(searchQuery);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, searchMobiles]);

  return (
    <SearchInputWrapper>
      <SearchInput
        type="text"
        placeholder="Search for a smartphone..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      {searchQuery.length > 0 && (
        <Image
          src="/assets/close.svg"
          alt="Clear search"
          width={20}
          height={20}
          onClick={handleClearInput}
        />
      )}
      <SearchResultsCount>
        {searchedMobiles ? (
          <p>
            {searchedMobiles.length > 1
              ? `${searchedMobiles.length} results`
              : `${searchedMobiles.length} result`}
          </p>
        ) : (
          <p>{mobiles.length > 1 ? `${mobiles.length} results` : `${mobiles.length} result`}</p>
        )}
      </SearchResultsCount>
    </SearchInputWrapper>
  );
}
