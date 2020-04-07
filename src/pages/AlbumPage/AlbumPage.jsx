import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, NavLink } from 'react-router-dom';
import Album from '../../components/Album';

const AlbumPage = ({ album, getAlbumById, loading, setSelectedAlbum }) => {
  const { albumId } = useParams();
  useEffect(() => {
    if (albumId && !album?.id) {
      getAlbumById(albumId);
    }

    return () => setSelectedAlbum();
  }, []);
  return (
    <div className="album-page">
      <NavLink to="/">
        <i className="fas fa-arrow-left" />
      </NavLink>
      {loading || !album ? <div>LOADING...</div> : <Album album={album} fullInfo />}
    </div>
  );
};

AlbumPage.defaultProps = {
  album: {},
  loading: false,
};

AlbumPage.propTypes = {
  album: PropTypes.object,
  getAlbumById: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  setSelectedAlbum: PropTypes.func.isRequired,
};

export default AlbumPage;
