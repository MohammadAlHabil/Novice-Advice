import React from 'react';
import { PropTypes } from 'prop-types';
import AdviceCard from './../AdviceCard';
import './Fav.css';

export default function Fav({ favorite, setFavorite, search }) {
  return (
    <div className="fav-content">
      {favorite.length ? (
        favorite.map((fav) => {
          return (
            <AdviceCard
              key={fav.id}
              advice={fav}
              search={search}
              favorite={favorite}
              setFavorite={setFavorite}
            />
          );
        })
      ) : (
        <div>There&apos;s no any item here</div>
      )}
    </div>
  );
}

Fav.propTypes = {
  favorite: PropTypes.array,
  setFavorite: PropTypes.func,
  search: PropTypes.string,
};
