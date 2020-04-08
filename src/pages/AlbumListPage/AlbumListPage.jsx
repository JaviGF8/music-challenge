import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../../components/AlbumsList';
import SearchBar from '../../components/SearchBar';

const isFiltered = ({ artist, name }, search) =>
  -1 < artist.toLowerCase().indexOf(search) || -1 < name.toLowerCase().indexOf(search);

const AlbumListPage = ({ albums, getAllAlbums, loading }) => {
  const [ filteredAlbums, setFilteredAlbums ] = useState(albums);
  const [ search, setSearch ] = useState(null);

  useEffect(() => {
    getAllAlbums();
  }, []);

  useEffect(() => {
    if (albums && search) {
      setFilteredAlbums(albums.filter((album) => isFiltered(album, search.toLowerCase())));
    } else if (albums) {
      setFilteredAlbums(albums);
    }
  }, [ albums, search ]);

  return (
    <div className="albums-container">
      <h1>Top 100 Albums in iTunes USA</h1>
      <SearchBar onSearch={setSearch} />
      {loading && <div>LOADING</div>}
      <AlbumList albums={filteredAlbums} />
    </div>
  );
};

AlbumListPage.defaultProps = {
  albums: [],
  loading: false,
};

AlbumListPage.propTypes = {
  albums: PropTypes.array,
  getAllAlbums: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default AlbumListPage;
