/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const SearchBar = ({ icon, onSearch }) => {
  const [ value, setValue ] = useState(null);
  const [ visible, setVisible ] = useState(false);

  const outsideRef = useRef();
  const inputRef = useRef();

  const handleClick = (event) => {
    if (visible && outsideRef.current && !outsideRef.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      inputRef.current.focus();
    }
  }, [ visible ]);

  useEffect(() => {
    onSearch(value);
  }, [ value ]);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <div className="search-bar shadow" ref={outsideRef} onClick={() => setVisible(true)}>
      {icon && <Icon icon={icon} />}
      <input
        className={value || visible ? '' : 'hidden'}
        ref={inputRef}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  icon: 'fas fa-search',
};

SearchBar.propTypes = {
  icon: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
