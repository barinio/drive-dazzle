import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65cd0d8add519126b8400979.mockapi.io',
});

export const requestCatatlogCars = async (page = 1) => {
  const { data } = await instance.get(`/adverts?page=${page}&limit=12`);

  return data;
};
