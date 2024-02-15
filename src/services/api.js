import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65cd0d8add519126b8400979.mockapi.io',
});

export const requestCatatlogCars = async () => {
  const { data } = await instance.get('/adverts?page=1&limit=12');
  // let filteredData = data;

  return data;
};
