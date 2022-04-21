import React from 'react';
import PropTypes from 'prop-types';
import { ListAdvices } from '../index';

export default function Home({ search, setSearch, favorite, setFavorite }) {
  return (
    <div>
      <ListAdvices
        search={search}
        setSearch={setSearch}
        favorite={favorite}
        setFavorite={setFavorite}
      />
    </div>
  );
}

Home.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  favorite: PropTypes.array,
  setFavorite: PropTypes.func,
};
