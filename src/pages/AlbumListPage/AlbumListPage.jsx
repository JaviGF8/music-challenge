import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../../components/AlbumsList';

const AlbumListPage = ({ albums, getAllAlbums, loading }) => {
  useEffect(() => {
    getAllAlbums();
  }, []);
  return (
    <div className="albums-container">
      <h1>Album List</h1>
      {loading && <div>LOADING</div>}
      <AlbumList albums={albums} />
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
