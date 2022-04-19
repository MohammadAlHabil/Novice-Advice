import './AdviceCard.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function AdviceCard({ advice }) {
  return <li className="ListAdvices-item">{advice.advice}</li>;
}

AdviceCard.propTypes = {
  advice: PropTypes.object,
};