import axios from 'axios';
import config from '../config/keyConfig';

const axiosApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: config.MOVIE_DB_API_KEY,
    language: 'pt-BR',
  },
});

export default axiosApi;
