import ALBUMS from '../../utils/dispatchs';

const initialState = {
  album: null,
  albums: [],
  loading: false,
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case ALBUMS.SET:
      return { ...state, album: action.album };
    case ALBUMS.SET_ALL:
      return { ...state, albums: action.albums };
    case ALBUMS.LOADING:
      return { ...state, loading: true };
    case ALBUMS.LOADING_END:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default albums;
