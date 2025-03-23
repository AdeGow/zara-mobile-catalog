'use client'

import { useState, useEffect } from 'react';
import { SearchInputWrapper, SearchInput } from '../styles/searchProductBarStyles'
import { useProducts } from '../context/ProductsContext';

export default function SearchProductBar() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { searchMobiles } = useProducts();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchMobiles(searchQuery);
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
    </SearchInputWrapper>
  );
}
