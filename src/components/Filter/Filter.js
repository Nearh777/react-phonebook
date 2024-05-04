// import React from 'react';
import './Filter.scss';




const Filter = ({ value, onChange }) => (
    <label className="filter__label">
          Find contacts by name
          <input type="text" value={value} onChange={onChange} className="filter__input"/>
        </label>
);


export default Filter;

