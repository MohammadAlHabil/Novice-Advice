import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import logo from '../../images/logo.png';
import Search from './../Search';
import { Link, NavLink } from 'react-router-dom';
export default function Nav({ setOpenModal, search, setSearch }) {
  return (
    <div className="wrap-nav">
      <div className="container">
        <nav className="navbar">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <Search search={search} setSearch={setSearch} />
          <NavLink
            to="/favorite"
            className={({ isActive }) => (isActive ? 'active' : 'fav-icon ')}
          >
            <box-icon name="heart" type="solid"></box-icon>
          </NavLink>
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
