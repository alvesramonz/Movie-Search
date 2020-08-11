import axios from 'axios';
import config from '../config/keyConfig';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/76341?api_key=${config.MOVIE_DB_API_KEY}`,
  params: {
    language: 'pt-BR',
  },
});

export default api;
