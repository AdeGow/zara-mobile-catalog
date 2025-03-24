import { API } from '../../lib/api';
import { Mobile } from '../interfaces/mobileType';

export const fetchMobiles = async () => {
  const res = await API.get('/products?limit=20');
  return res.data;
};

export const fetchMobile = async (mobileId: string): Promise<Mobile | null> => {
  try {
    const response = await API.get(`/products/${mobileId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching mobile details:', error);
    return null;
  }
};
