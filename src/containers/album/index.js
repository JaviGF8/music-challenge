import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import AlbumPage from '../../pages/AlbumPage';
import { getAlbumById, setSelectedAlbum } from '../../actions/albums/albums';

const mapStateToProps = ({ albums }) => ({
  album: albums.album,
  loading: albums.loading,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getAlbumById,
      setSelectedAlbum,
    },
    dispatch,
  ),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumPage));
