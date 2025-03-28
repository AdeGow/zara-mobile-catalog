import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileDetail from '@/components/MobileDetail';
import { Mobile } from '@/interfaces/mobileType';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/utils/cartUtils';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/utils/cartUtils', () => ({
  addToCart: jest.fn(),
}));

describe('MobileDetail', () => {
  const push = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  const mockMobile: Mobile = {
    id: '1',
    brand: 'Samsung',
    name: 'Galaxy A15',
    imageUrl: 'image.jpg',
    description: 'A great phone',
    basePrice: 300,
    rating: 4.5,
    specs: {
      screen: '6.5 inches',
      resolution: '1080x2400',
      processor: 'Exynos',
      mainCamera: '64MP',
      selfieCamera: '32MP',
      battery: '5000mAh',
      os: 'Android',
      screenRefreshRate: '120Hz',
    },
    colorOptions: [
      { name: 'Black', hexCode: '#000000', imageUrl: '/black.jpg' },
      { name: 'Blue', hexCode: '#0000FF', imageUrl: '/blue.jpg' },
    ],
    storageOptions: [
      { capacity: '128GB', price: 300 },
      { capacity: '256GB', price: 350 },
    ],
    similarProducts: [],
  };

  it('renders mobile name and base price', () => {
    render(<MobileDetail mobile={mockMobile} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Galaxy A15' })).toBeInTheDocument();
    expect(screen.getByText(/From 300 EUR/)).toBeInTheDocument();
  });

  it('updates price when a storage option is selected', () => {
    render(<MobileDetail mobile={mockMobile} />);
    const storageButton = screen.getByText('256GB');
    fireEvent.click(storageButton);
    expect(screen.getByText('350 EUR')).toBeInTheDocument();
  });

  it('disables add to cart button if no storage is selected', () => {
    render(<MobileDetail mobile={mockMobile} />);
    const button = screen.getByRole('button', { name: /Add to Cart/i });
    expect(button).toBeDisabled();
  });

  it('adds item to cart when storage and color are selected', () => {
    render(<MobileDetail mobile={mockMobile} />);

    const storageButton = screen.getByText('128GB');
    fireEvent.click(storageButton);

    const addToCartBtn = screen.getByRole('button', { name: /Add to Cart/i });
    fireEvent.click(addToCartBtn);

    expect(addToCart).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Galaxy A15',
        selectedStorage: { capacity: '128GB', price: 300 },
        selectedColor: { name: 'Black', hexCode: '#000000', imageUrl: '/black.jpg' },
      }),
    );
  });
});
