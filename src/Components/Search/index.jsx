import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

export default function Search({ search, setSearch }) {
  return (
    <div className="search">
      <input
        className="search-input"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search for advice"
      />
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
