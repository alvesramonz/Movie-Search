export default function movie(state = {}, action) {
  switch (action.type) {
    case '@MOVIE_INFO':
      return {
        ...action.movie,
      };
    default:
      return state;
  }
}
