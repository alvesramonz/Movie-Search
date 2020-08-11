import axiosApi from './axiosApi';

export const MOVIE_DB_BASE_IMAGE_URL = {
  small: 'https://image.tmdb.org/t/p/w185',
  medium: 'https://image.tmdb.org/t/p/w300',
  large: 'https://image.tmdb.org/t/p/w1280',
  original: 'https://image.tmdb.org/t/p/original',
};

export const getMovie = (id) => {
  return axiosApi.get(`/movie/${id}`);
};

export const getActors = (id) => {
  return axiosApi.get(`/movie/${id}/credits`);
};

export const getMoviesImage = (id) => {
  return axiosApi.get(`/movie/${id}/images`, { params: { language: 'null' } });
};

/* * */

export const getPopular = () => {
  return axiosApi.get(`/movie/popular`);
};

export const getLatest = () => {
  return axiosApi.get(`/movie/latest`);
};

export const getTopRated = () => {
  return axiosApi.get(`/movie/top_rated`);
};
