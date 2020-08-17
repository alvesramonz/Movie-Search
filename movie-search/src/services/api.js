import axios from 'axios';
import config from '../config/keyConfig';

const baseUrl = 'https://api.themoviedb.org/3';

const topRatedUrl = `${baseUrl}/movie/top_rated`;
const nowPlayingUrl = `${baseUrl}/movie/now_playing`;
const popularUrl = `${baseUrl}/movie/popular`;
const latestUrl = `${baseUrl}/movie/latest`;

const MOVIE_DB_BASE_IMAGE_URL = {
  small: 'https://image.tmdb.org/t/p/w185',
  medium: 'https://image.tmdb.org/t/p/w300',
  large: 'https://image.tmdb.org/t/p/w1280',
  original: 'https://image.tmdb.org/t/p/original',
};

export const fetchPopularMovies = async () => {
  try {
    const { data } = await axios.get(popularUrl, {
      params: {
        api_key: config.MOVIE_DB_API_KEY,
        language: 'pt_BR',
        page: 1,
      },
    });

    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: MOVIE_DB_BASE_IMAGE_URL.original + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: MOVIE_DB_BASE_IMAGE_URL.original + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchTopRatedMovies = async () => {
  try {
    const { data } = await axios.get(topRatedUrl, {
      params: {
        api_key: config.MOVIE_DB_API_KEY,
        language: 'pt_BR',
        page: 1,
      },
    });

    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: MOVIE_DB_BASE_IMAGE_URL.original + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: MOVIE_DB_BASE_IMAGE_URL.original + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchNowPlayingMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: config.MOVIE_DB_API_KEY,
        language: 'pt_BR',
        page: 1,
      },
    });

    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: MOVIE_DB_BASE_IMAGE_URL.original + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: MOVIE_DB_BASE_IMAGE_URL.original + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchLatestMovies = async () => {
  try {
    const { data } = await axios.get(latestUrl, {
      params: {
        api_key: config.MOVIE_DB_API_KEY,
        language: 'pt_BR',
        page: 1,
      },
    });

    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: MOVIE_DB_BASE_IMAGE_URL.original + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: MOVIE_DB_BASE_IMAGE_URL.original + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
