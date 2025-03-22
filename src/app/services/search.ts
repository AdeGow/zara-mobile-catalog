import { API } from '../../lib/api';

export const fetchMobiles = async () => {
  const res = await API.get('/products?limit=20');
  return res.data;
};
