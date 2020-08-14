import React, { useState, useEffect } from 'react';

import { fetchMovies } from '../../services/api';

import { Container, MovieList } from './styles';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const loadApi = async () => {
      setPopularMovies(await fetchMovies());
    };

    loadApi();
  }, []);

  return (
    <Container>
      <MovieList>
        {popularMovies.map((m) => (
          <li key={m.id}>
            <img style={{ height: 300 }} src={m.poster} alt={m.title} />
          </li>
        ))}
      </MovieList>
    </Container>
  );
}

export default Home;

//https://api.themoviedb.org/3/movie/612706?api_key=7d6600758773a0a23c5e6c6fb2d27931
