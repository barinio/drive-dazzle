import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65c6a839e5b94dfca2e1ba53.mockapi.io',
});

export const requestCatatlogCars = async () => {
  const { data } = await instance.get('/get');
  return data;
};

export const requestCarsInfo = async id => {
  const { data } = await instance.get(`/get/${id}`);
  return data;
};
