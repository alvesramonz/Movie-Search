import React, { useState, useEffect } from 'react';

import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchLatestMovies,
} from '../../services/api';

import { Container, MovieList, SortMovies } from './styles';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const loadApi = async () => {
      setPopularMovies(await fetchPopularMovies());
      setTopRatedMovies(await fetchTopRatedMovies());
      setNowPlayingMovies(await fetchNowPlayingMovies());
      setLatestMovies(await fetchLatestMovies());
    };

    loadApi();
  }, []);

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
          <li key={m.id}>
            <a href="#">
              <img style={{ height: 300 }} src={m.poster} alt={m.title} />
            </a>
            {/* <span className="card-rating">{m.rating}</span> */}
            <div className="card-body">
              <strong>{m.title}</strong>
            </div>
          </li>
        ))}
      </MovieList>
    </Container>
  );
}

export default Home;

//https://api.themoviedb.org/3/movie/612706?api_key=7d6600758773a0a23c5e6c6fb2d27931
