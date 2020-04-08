import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import AlbumInfo from './AlbumInfo/AlbumInfo';
import { MAIN_URL } from '../../utils/urls';

const getClassName = (position) => {
  let classname = 'top-hundred-album';

  if (1 === position) {
    classname = 'top-album';
  } else if (4 > position) {
    classname = 'top-three-album';
  } else if (7 > position) {
    classname = 'top-six-album';
  } else if (11 > position) {
    classname = 'top-ten-album';
  } else if (21 > position) {
    classname = 'top-twenty-album';
  } else if (51 > position) {
    classname = 'top-fifty-album';
  }

  return classname;
};

const Album = ({ album, fullInfo }) =>
  album && (
    <div className={`album fadein${fullInfo ? ' album-full' : ''} ${getClassName(album.position)}`}>
      <div className="album-container">
        {fullInfo ? (
          <div className="shadow">
            <AlbumInfo album={album} fullInfo={fullInfo} />
          </div>
        ) : (
          <NavLink className="shadow" to={`${MAIN_URL}${album.id}`}>
            <AlbumInfo album={album} fullInfo={fullInfo} />
          </NavLink>
        )}
      </div>
    </div>
  );

Album.defaultProps = {
  fullInfo: false,
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
  fullInfo: PropTypes.bool,
};

export default Album;
