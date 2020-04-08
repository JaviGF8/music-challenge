import { combineReducers } from 'redux';

import albums from './albums/albums';
import genres from './genres/genres';

const rootReducer = combineReducers({
  albums,
  genres,
});

export default rootReducer;
