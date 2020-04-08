import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Selector = ({ onChange, options }) => {
  const [ selected, setSelected ] = useState([]);
  const [ selectedAll, setSelectedAll ] = useState(true);
  const [ visible, setVisible ] = useState(false);

  const setAllSelected = () => {
    if (options?.length) {
      const newSelected = [];

      options.forEach((opt) => newSelected.push(opt));
      setSelected(newSelected);
    }
  };

  const onSelect = (option) => {
    const index = selected.indexOf(option);
    if (-1 === index) {
      setSelected([ ...selected, option ]);
    } else {
      setSelected(selected.filter((opt) => opt !== option));
    }
  };

  useEffect(() => {
    setAllSelected();
  }, [ options ]);

  useEffect(() => {
    const sameLength = selected.length === options?.length;
    if (selectedAll && !sameLength) {
      setSelectedAll(false);
    } else if (!selectedAll && sameLength) {
      setSelectedAll(true);
    }

    onChange(selected);
  }, [ selected ]);

  return (
    <div className="selector">
      <Button
        className="shadow"
        icon={`fas fa-${visible ? 'arrow-right' : 'filter'}`}
        onClick={() => setVisible(!visible)}
      />
      <div className={`selector-options shadow${visible ? '' : ' hidden'}`}>
        <Button
          className={selectedAll ? 'selected' : undefined}
          disabled={selectedAll}
          onClick={setAllSelected}
          text="All"
        />
        {options.map((opt) => (
          <Button
            className={-1 === selected.indexOf(opt) ? undefined : 'selected'}
            onClick={() => onSelect(opt)}
            text={opt}
          />
        ))}
      </div>
    </div>
  );
};

Selector.defaultProps = {
  options: [],
};

Selector.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
};

export default Selector;
