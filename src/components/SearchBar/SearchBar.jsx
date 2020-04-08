import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const SearchBar = ({ clearIcon, icon, onSearch }) => {
  const [ value, setValue ] = useState('');
  const [ visible, setVisible ] = useState(false);

  const outsideRef = useRef();
  const inputRef = useRef();

  const clear = () => {
    setValue('');
    setVisible(false);
  };

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
    <div className="search-bar shadow" ref={outsideRef}>
      <Button icon={icon} onClick={() => setVisible(true)} />
      <input
        className={value || visible ? '' : 'hidden'}
        ref={inputRef}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search"
        value={value}
      />
      {(visible || value) && <Button className="fadein" icon={clearIcon} onClick={clear} />}
    </div>
  );
};

SearchBar.defaultProps = {
  clearIcon: 'fas fa-times',
  icon: 'fas fa-search',
};

SearchBar.propTypes = {
  clearIcon: PropTypes.string,
  icon: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
