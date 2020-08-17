import React from 'react';
import { connect } from 'react-redux';

import { Container, MovieDetail, MovieCast, Recommendations } from './styles';

function Movie({ movie, movieBackPoster }) {
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

      <MovieCast>
        <div className="thread-actors">
          <h3>Actors</h3>
        </div>
        <div className="movie-actors">

        </div>
      </MovieCast>

      <Recommendations></Recommendations>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
  movieBackPoster: state.movie.backPoster,
});

export default connect(mapStateToProps)(Movie);
