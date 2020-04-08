import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import AlbumListPage from '../../pages/AlbumListPage';
import { getAllAlbums } from '../../actions/albums/albums';

const mapStateToProps = ({ albums, genres }) => ({
  albums: albums.albums,
  genres: genres.genres,
  loading: albums.loading,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getAllAlbums,
    },
    dispatch,
  ),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumListPage));
