import React from 'react';
import PropTypes from 'prop-types';
import './ListAdvices.css';
import { useEffect, useState } from 'react';
import AdviceCard from './../AdviceCard';
import noResult from '../../images/noResult.svg';

export default function ListAdvices({ search, setSearch }) {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`https://api.adviceslip.com/advice/search/w`, {
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => setAdvices(data.slips))
      .catch(console.log);

    return () => abortController.abort();
  }, [advices]);

  let result = advices;
  (function filterAdvices() {
    if (search === '') return result;
    else {
      return (result = advices.filter((advice) => {
        return advice.advice.toLowerCase().includes(search.toLowerCase());
      }));
    }
  })();

  const SearchAgain = () => {
    document.querySelector('.search-input').focus();
    setSearch('');
  };

  return (
    <div className="container">
      <ul className="ListAdvices">
        {result.length === 0 ? (
          <div className="wrap-no-result">
            <img src={noResult} alt="noResult" />
            <h2>No Result Found</h2>
            <p>
              We&apos;ve searched more than 350 advice We did not find any
              advice for your search
            </p>
            <button className="btn-search-again" onClick={SearchAgain}>
              Search Again
            </button>
          </div>
        ) : (
          result.map((advice, index) => {
            return <AdviceCard key={index} advice={advice} />;
          })
        )}
      </ul>
    </div>
  );
}

ListAdvices.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
