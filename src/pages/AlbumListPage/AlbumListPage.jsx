import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../../components/AlbumsList';
import SearchBar from '../../components/SearchBar';
import Selector from '../../components/Selector';

const AlbumListPage = ({ albums, genres, getAllAlbums, loading }) => {
  const [ filteredAlbums, setFilteredAlbums ] = useState(albums);
  const [ filteredGenres, setFilteredGenres ] = useState(genres);
  const [ search, setSearch ] = useState(undefined);

  const isSelected = ({ artist, name, genre }) =>
    -1 < filteredGenres.indexOf(genre) &&
    (-1 < artist.toLowerCase().indexOf(search.toLowerCase()) || -1 < name.toLowerCase().indexOf(search.toLowerCase()));

  useEffect(() => {
    getAllAlbums();
  }, []);

  useEffect(() => {
    if (albums && search) {
      setFilteredAlbums(albums.filter((album) => isSelected(album)));
    } else if (albums) {
      setFilteredAlbums(albums);
    }
  }, [ albums, search ]);

  useEffect(() => {
    if (filteredGenres.length !== genres?.length || filteredAlbums?.length !== albums?.length) {
      setFilteredAlbums(albums.filter((album) => isSelected(album)));
    }
  }, [ filteredGenres ]);

  return (
    <div className="albums-container">
      <h1>Top 100 Albums in iTunes USA</h1>
      <SearchBar onSearch={setSearch} />
      {!!genres?.length && <Selector options={genres} onChange={setFilteredGenres} />}
      {loading && <div>LOADING</div>}
      <AlbumList albums={filteredAlbums} genres={genres} />
    </div>
  );
};

AlbumListPage.defaultProps = {
  albums: [],
  genres: [],
  loading: false,
};

AlbumListPage.propTypes = {
  albums: PropTypes.array,
  genres: PropTypes.array,
  getAllAlbums: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default AlbumListPage;
