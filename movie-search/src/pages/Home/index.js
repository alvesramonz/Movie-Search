import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchLatestMovies,
} from '../../services/api';

import { Container, MovieList, SortMovies } from './styles';

import * as MovieAction from '../../store/modules/movie/actions';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadApi = async () => {
      setPopularMovies(await fetchPopularMovies());
      setTopRatedMovies(await fetchTopRatedMovies());
      setNowPlayingMovies(await fetchNowPlayingMovies());
      setLatestMovies(await fetchLatestMovies());
    };

    loadApi();
  }, []);

  function handleMovieInfo(movie) {
    dispatch(MovieAction.movieInfo(movie));
  }

  return (
    <Container>
      <SortMovies>
        <button type="button">Popular</button>
        <button type="button">Top Rated</button>
        <button type="button">Now Playing</button>
        <button type="button">Latest</button>
      </SortMovies>
      <MovieList>
        {popularMovies.map((m) => (
          <Link to="/movie" onClick={() => handleMovieInfo(m)}>
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

//https://api.themoviedb.org/3/movie/612706?api_key=7d6600758773a0a23c5e6c6fb2d27931
