import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://prueba-tecnica-api-tienda-moviles.onrender.com',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '87909682e6cd74208f41a6ef39fe4191',
  },
});
