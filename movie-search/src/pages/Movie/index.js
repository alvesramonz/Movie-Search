import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { Container, MovieDetail, Recommendations } from './styles';

import { fetchRecommendations } from '../../services/api';

import * as MovieAction from '../../store/modules/movie/actions';

function Movie({ movie }) {
  const [movieRecommendations, setMovieRecommendations] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const loadRecommendations = async () => {
      setMovieRecommendations(await fetchRecommendations(id));
    };

    loadRecommendations();
  }, [id]);

  function handleMovieInfo(movie) {
    dispatch(MovieAction.movieInfo(movie));
  }

  return (
    <Container>
      <MovieDetail>
        <img className="movie-img" src={movie.poster} alt={movie.title} />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p className="movie-overview">{movie.overview}</p>
          {/* <div>Gêneros</div> */}
        </div>
        <div className="movie-stats">
          <div>Release Date: {movie.release_date}</div>
          <div>Duration: {movie.runtime}min</div>
          <div>Budget: {movie.budget}</div>
        </div>
      </MovieDetail>

      <h3>Recommendations</h3>
      <Recommendations>
        {movieRecommendations.map((m) => (
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
      </Recommendations>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(Movie);
