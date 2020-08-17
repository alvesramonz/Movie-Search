import { combineReducers } from 'redux';

import movie from './movie/reducer';

export default combineReducers({
  movie,
});

/**
 * Responsável por juntar todos os Reducers do projeto, "combineReducers"
 */
