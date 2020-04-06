import React from 'react';
import PropTypes from 'prop-types';

const getClassName = (position) => {
  let classname = '';

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

const Album = ({ album, chartPosition }) =>
  album && (
    <div className={`album fadein ${getClassName(chartPosition)}`}>
      <div className="album-container">
        <div className="shadow">
          <div className="album-position">{chartPosition}.</div>
          <div className="album-info">
            <div className="album-image">
              <img src={album.image} alt={album.name} />
            </div>
            <p>
              {album.artist} - {album.name}
            </p>
          </div>
          {11 > chartPosition && <div className="top-label shadow">TOP {chartPosition}</div>}
        </div>
      </div>
    </div>
  );

Album.defaultProps = {
  chartPosition: null,
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
  chartPosition: PropTypes.number,
};

export default Album;
