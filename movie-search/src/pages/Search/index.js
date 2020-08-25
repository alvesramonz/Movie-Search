import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { connect, useDispatch } from 'react-redux';

import { MovieList, Container } from './styles';

import { searchMovies } from '../../services/api';

import * as MovieAction from '../../store/modules/movie/actions';

function Search() {
  const [movieList, setMovieList] = useState([]);

  const dispatch = useDispatch();

  const { query } = useParams();

  useEffect(() => {
    const loadApi = async () => {
      setMovieList(await searchMovies(query));
    };

    loadApi();
  }, [query]);

  function handleMovieInfo(movie) {
    dispatch(MovieAction.movieInfo(movie));
  }

  return (
    <Container>
      <h3>{`SEARCH RESULTS "${query}"`}</h3>
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

export default connect()(Search);
