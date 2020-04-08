import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../../ExternalLink';

const AlbumInfo = ({ album, fullInfo }) =>
  album && (
    <>
      <div className="album-position">{album.position}.</div>
      <div className="album-info">
        <div className="album-image">
          <img src={album.image} alt={album.name} />
        </div>
        {fullInfo ? (
          <div className="album-full-info">
            <p className="album-name">{album.name}</p>
            <ExternalLink href={album.artistLink} disabled={!fullInfo} text={album.artist} />
            <p className="album-rights">{album.rights}</p>
            <div className="album-genre">
              Genre:
              <ExternalLink href={album.genreLink} disabled={!fullInfo} text={album.genre} />
            </div>
            <div className="album-price">
              Price: <span>{album.price}</span>
            </div>
            <div className="album-songs">Number of songs: {album.totalSongs}</div>
          </div>
        ) : (
          <p>
            {album.artist} - {album.name}
          </p>
        )}
      </div>
      {11 > album.position && <div className="top-label shadow">TOP {album.position}</div>}
    </>
  );

AlbumInfo.defaultProps = {
  fullInfo: false,
};

AlbumInfo.propTypes = {
  album: PropTypes.object.isRequired,
  fullInfo: PropTypes.bool,
};

export default AlbumInfo;
