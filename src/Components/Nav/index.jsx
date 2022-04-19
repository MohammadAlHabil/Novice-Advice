import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import logo from '../../images/logo.png';
export default function Nav({ setOpenModal }) {
  return (
    <div className="wrap-nav">
      <div className="container">
        <nav className="navbar">
          <img src={logo} alt="logo" />
          <button
            className="create-qr"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Create QR
          </button>
        </nav>
      </div>
    </div>
  );
}

Nav.propTypes = {
  setOpenModal: PropTypes.func,
};
