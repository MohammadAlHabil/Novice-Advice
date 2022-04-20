import './AdviceCard.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function AdviceCard({ advice, search }) {
  let firstHtmlPart, secondHtmlPart;
  (function findAndColorWord() {
    const word = advice.advice;
    let indexWordStart = word.indexOf(search);
    let wordLength = search.length;

    firstHtmlPart = word.substring(0, indexWordStart - 1);
    secondHtmlPart = word.substring(
      indexWordStart + wordLength,
      word.length - 1
    );
  })();

  return (
    <li className="ListAdvices-item">
      {firstHtmlPart}
      <span style={{ color: 'red' }}>{' ' + search}</span>
      {secondHtmlPart}
    </li>
  );
}

AdviceCard.propTypes = {
  advice: PropTypes.object,
  search: PropTypes.string,
};
