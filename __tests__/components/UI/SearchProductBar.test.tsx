import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchProductBar from '@/components/UI/SearchProductBar';
import { useProducts } from '@/context/ProductsContext';

jest.mock('@/context/ProductsContext');

const mockSearchMobiles = jest.fn();

const mockContextValues = {
  mobiles: [
    { id: '1', name: 'Galaxy A15', brand: 'Samsung', basePrice: 300, imageUrl: '' },
    { id: '2', name: 'iPhone 15', brand: 'Apple', basePrice: 1200, imageUrl: '' },
  ],
  searchedMobiles: null,
  searchMobiles: mockSearchMobiles,
};

(useProducts as jest.Mock).mockReturnValue(mockContextValues);

describe('SearchProductBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the input with placeholder', () => {
    render(<SearchProductBar />);
    expect(screen.getByPlaceholderText('Search for a smartphone...')).toBeInTheDocument();
  });

  it('updates the input value and triggers debounced search', async () => {
    render(<SearchProductBar />);
    const input = screen.getByPlaceholderText('Search for a smartphone...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'iPhone' } });
    expect(input.value).toBe('iPhone');

    await waitFor(
      () => {
        expect(mockSearchMobiles).toHaveBeenCalledWith('iPhone');
      },
      { timeout: 500 },
    );
  });

  it('clears the input and resets the search', async () => {
    render(<SearchProductBar />);
    const input = screen.getByPlaceholderText('Search for a smartphone...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'iPhone' } });

    const clearButton = await screen.findByAltText('Clear search');
    fireEvent.click(clearButton);

    expect(input.value).toBe('');
    expect(mockSearchMobiles).toHaveBeenCalledWith('');
  });

  it('displays searchedMobiles count when available', () => {
    (useProducts as jest.Mock).mockReturnValue({
      ...mockContextValues,
      searchedMobiles: [{ id: '1', name: 'Galaxy A15' }],
    });

    render(<SearchProductBar />);
    expect(screen.getByText('1 result')).toBeInTheDocument();
  });
});
