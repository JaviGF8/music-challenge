import { GENRES } from '../../utils/dispatchs';

const getAlbumGenres = (albums) => {
  let genres = [];

  if (albums?.length) {
    const all = albums.map(({ genre }) => genre);
    genres = all.filter((genre, idx, self) => self.indexOf(genre) === idx).sort();
  }
  return genres;
};

const setAlbumGenres = (albums) => (dispatch) => {
  dispatch({ type: GENRES.SET_ALL, genres: getAlbumGenres(albums) });
};

export default setAlbumGenres;
