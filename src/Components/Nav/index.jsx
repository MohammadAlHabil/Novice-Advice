import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import logo from '../../images/logo.png';
import Search from './../Search';
export default function Nav({ setOpenModal, search, setSearch }) {
  return (
    <div className="wrap-nav">
      <div className="container">
        <nav className="navbar">
          <img src={logo} alt="logo" />
          <Search search={search} setSearch={setSearch} />
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
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
