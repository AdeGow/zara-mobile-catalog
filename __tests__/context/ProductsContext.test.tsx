import { render, screen, waitFor } from '@testing-library/react';
import { API } from '@/lib/api';
import { ProductsProvider, useProducts } from '@/context/ProductsContext';
import { Mobile } from '@/interfaces/mobileType';

jest.mock('@/lib/api', () => ({
  API: {
    get: jest.fn(),
  },
}));

const mockMobile: Mobile = {
  id: '1',
  brand: 'Samsung',
  name: 'A15',
  imageUrl: 'image.jpg',
  description: 'A smartphone',
  basePrice: 100,
  rating: 4.5,
  specs: {
    screen: '6.5 inches',
    resolution: '1080x2400',
    processor: 'Exynos 2100',
    mainCamera: '64MP',
    selfieCamera: '32MP',
    battery: '5000mAh',
    os: 'Android 12',
    screenRefreshRate: '120Hz',
  },
  colorOptions: [{ name: 'Black', hexCode: '#000000', imageUrl: 'black.jpg' }],
  storageOptions: [{ capacity: '128GB', price: 100 }],
  similarProducts: [],
};

function TestComponent() {
  const { mobiles } = useProducts();
  return (
    <div>
      {mobiles.map((mobile) => (
        <p key={mobile.id}>{mobile.name}</p>
      ))}
    </div>
  );
}

describe('ProductsContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('provides initial mobiles after async init', async () => {
    render(
      <ProductsProvider initialMobiles={[mockMobile]}>
        <TestComponent />
      </ProductsProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('A15')).toBeInTheDocument();
    });
  });

  it('deduplicates mobiles before setting them in context', async () => {
    render(
      <ProductsProvider initialMobiles={[mockMobile, { ...mockMobile }]}>
        <TestComponent />
      </ProductsProvider>,
    );

    await waitFor(() => {
      const elements = screen.getAllByText('A15');
      expect(elements).toHaveLength(1);
    });
  });

  it('fetches additional mobiles if initialMobiles < 20', async () => {
    // @ts-ignore
    API.get.mockImplementation((url: string) => {
      if (url.startsWith('/products?limit=')) {
        return Promise.resolve({ data: [mockMobile] });
      }
      // Fallback for any other API call
      return Promise.resolve({ data: [] });
    });

    render(
      <ProductsProvider initialMobiles={[mockMobile]}>
        <TestComponent />
      </ProductsProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('A15')).toBeInTheDocument();
    });

    expect(API.get).toHaveBeenCalledWith('/products?limit=19&offset=1');
  });
});
