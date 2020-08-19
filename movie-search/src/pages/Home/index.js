import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
} from '../../services/api';

import { Container, MovieList, SortMovies } from './styles';

import * as MovieAction from '../../store/modules/movie/actions';

function Home() {
  const [movieList, setMovieList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadApi = async () => {
      setMovieList(await fetchPopularMovies());
    };

    loadApi();
  }, []);

  const handleSortMovies = async (sortType) => {
    switch (sortType) {
      case 1:
        setMovieList(await fetchPopularMovies());
        break;
      case 2:
        setMovieList(await fetchTopRatedMovies());
        break;
      case 3:
        setMovieList(await fetchNowPlayingMovies());
        break;
      default:
        setMovieList(await fetchPopularMovies());
    }
  };

  function handleMovieInfo(movie) {
    dispatch(MovieAction.movieInfo(movie));
  }

  return (
    <Container>
      <SortMovies>
        <button type="button" onClick={() => handleSortMovies(1)}>
          Popular
        </button>
        <button type="button" onClick={() => handleSortMovies(2)}>
          Top Rated
        </button>
        <button type="button" onClick={() => handleSortMovies(3)}>
          Now Playing
        </button>
      </SortMovies>

      <MovieList>
        {movieList.map((m) => (
          <Link to={`/movie/${m.id}`} onClick={() => handleMovieInfo(m)}>
            <li key={m.id}>
              <img style={{ height: 300 }} src={m.poster} alt={m.title} />
              {/* <span className="card-rating">{m.rating}</span> */}
              <div className="card-body">
                <strong>{m.title}</strong>
              </div>
            </li>
          </Link>
        ))}
      </MovieList>
    </Container>
  );
}

export default connect()(Home);
