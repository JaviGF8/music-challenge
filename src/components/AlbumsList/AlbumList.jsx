import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';

const AlbumList = ({ albums }) => (
  <div className="album-list">
    {0 < albums?.length && albums.map((album) => <Album album={album} key={album.id} />)}
  </div>
);

AlbumList.defaultProps = {
  albums: [],
};

AlbumList.propTypes = {
  albums: PropTypes.array,
};

export default AlbumList;
