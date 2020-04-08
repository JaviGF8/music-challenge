import { GENRES } from '../../utils/dispatchs';

const initialState = {
  genres: [],
  loading: false,
};

const genres = (state = initialState, action) => {
  switch (action.type) {
    case GENRES.SET_ALL:
      return { ...state, genres: action.genres };
    default:
      return { ...state };
  }
};

export default genres;
