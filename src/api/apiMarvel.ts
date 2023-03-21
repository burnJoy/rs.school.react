import axios from 'axios';
const apikey = '819e65a02a5f14bab5603114aff2dda3';

const marvelInstance = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
  params: {
    apikey,
  },
});

const apiMarvel = {
  async getList() {
    const response = await marvelInstance({
      method: 'GET',
      url: '/characters',
      params: {
        limit: 100,
      },
    });

    return response?.data?.data?.results;
  },
};

export default apiMarvel;
