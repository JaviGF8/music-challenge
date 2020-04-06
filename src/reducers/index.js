import { combineReducers } from 'redux';

import albums from './albums/albums';

const rootReducer = combineReducers({
  albums,
});

export default rootReducer;
