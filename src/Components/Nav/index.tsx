import React from "react";
import "./Nav.css";
import logo from "../../images/logo.png";
import Search from "../Search";
import { Link, NavLink } from "react-router-dom";

interface NavProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ setOpenModal, search, setSearch }: NavProps) {
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
            className={({ isActive }) => (isActive ? "active" : "fav-icon ")}
          >
            {/* @ts-ignore */}
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
