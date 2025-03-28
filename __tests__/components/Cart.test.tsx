import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';
import { getCart, removeFromCart } from '@/utils/cartUtils';
import { CartItem } from '@/interfaces/cartItemType';
import Cart from '@/components/Cart';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/utils/cartUtils', () => ({
  getCart: jest.fn(),
  removeFromCart: jest.fn(),
}));

describe('Cart component', () => {
  const push = jest.fn();

  const mockCart: CartItem[] = [
    {
      id: '1',
      name: 'Galaxy A15',
      brand: 'Samsung',
      description: 'Budget phone',
      imageUrl: '/image.jpg',
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
      colorOptions: [],
      storageOptions: [],
      similarProducts: [],
      selectedColor: { name: 'Black', hexCode: '#000', imageUrl: '/black.jpg' },
      selectedStorage: { capacity: '128GB', price: 350 },
    },
    {
      id: '2',
      name: 'iPhone 15',
      brand: 'Apple',
      description: 'Premium phone',
      imageUrl: '/image2.jpg',
      basePrice: 1000,
      rating: 5,
      specs: {
        screen: '6.1 inches',
        resolution: '1170x2532',
        processor: 'A17 Bionic',
        mainCamera: '48MP',
        selfieCamera: '12MP',
        battery: '3300mAh',
        os: 'iOS',
        screenRefreshRate: '60Hz',
      },
      colorOptions: [],
      storageOptions: [],
      similarProducts: [],
      selectedColor: { name: 'Blue', hexCode: '#00f', imageUrl: '/blue.jpg' },
      selectedStorage: { capacity: '256GB', price: 1200 },
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push });
    (getCart as jest.Mock).mockReturnValue(mockCart);
  });

  it('renders the cart items and cart items count', () => {
    render(<Cart />);
    expect(screen.getByText('Cart (2)')).toBeInTheDocument();
    expect(screen.getByText('Galaxy A15')).toBeInTheDocument();
    expect(screen.getByText('iPhone 15')).toBeInTheDocument();
    expect(screen.getAllByText(/EUR/)[0]).toHaveTextContent('350 EUR');
    expect(screen.getAllByText(/EUR/)[1]).toHaveTextContent('1200 EUR');
    expect(screen.getAllByText(/EUR/)[2]).toHaveTextContent('1550 EUR'); // total price
  });

  it('removes item from cart when Remove button is clicked', () => {
    render(<Cart />);
    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[0]);
    expect(removeFromCart).toHaveBeenCalledWith('1');
    expect(getCart).toHaveBeenCalledTimes(2); // initial + after remove
  });

  it('navigates to /mobiles when clicking Continue shopping', () => {
    render(<Cart />);
    const continueButtons = screen.getAllByRole('button', { name: /Continue shopping/i });
    fireEvent.click(continueButtons[0]);
    expect(push).toHaveBeenCalledWith('/mobiles');
  });

  it('shows Pay button only when cart is not empty', () => {
    render(<Cart />);
    expect(screen.getAllByRole('button', { name: /Pay/i })).toHaveLength(2);
  });
});
