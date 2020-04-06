import { format } from 'date-fns';
import { get } from '../ApiWrapper';
import ALBUMS from '../../utils/dispatchs';

const ITUNES_URL = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

const LOADING = { type: ALBUMS.LOADING };
const LOADING_END = { type: ALBUMS.LOADING_END };

export const setSelectedAlbum = (album) => (dispatch) => {
  dispatch({ type: ALBUMS.SET, album });
};

export const setAlbums = (albums) => (dispatch) => {
  dispatch({ type: ALBUMS.SET_ALL, albums });
};

const formatAlbum = (album) =>
  album ?
    {
        fullInfo: { ...album },
        name: album['im:name']?.label,
        artist: album['im:artist']?.label,
        id: album.id?.attributes?.['im:id'],
        image: album['im:image']?.[album['im:image'].length - 1]?.label,
        releaseDate: album['im:releaseDate']?.label ?
          format(new Date(album['im:releaseDate'].label), 'dd/MM/YYY') :
          null,
      } :
    null;

const formatAlbums = (albums) => (albums?.length ? albums.map(formatAlbum) : []);

export const getAllAlbums = () => (dispatch) => {
  dispatch(LOADING);

  return new Promise((resolve, reject) => {
    get(ITUNES_URL)
      .then((response) => {
        const albums = formatAlbums(response.data.feed.entry);
        dispatch(setAlbums(albums));
        resolve(albums);
        dispatch(LOADING_END);
      })
      .catch((err) => {
        reject(err);
        dispatch(LOADING_END);
      });
  });
};
