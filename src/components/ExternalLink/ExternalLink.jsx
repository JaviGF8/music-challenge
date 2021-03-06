import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const ExternalLink = ({ className, icon, text, ...rest }) => (
  <a {...rest} className={`external-link${className ? ` ${className}` : ''}`} target="_blank" rel="noopener noreferrer">
    {icon && <Icon icon={icon} />}
    {text}
  </a>
);

ExternalLink.defaultProps = {
  className: undefined,
  icon: undefined,
  text: undefined,
};

ExternalLink.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default ExternalLink;
