import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Fav, Home, Modal, Nav } from "./Components";
import { Favorite } from "./Components/ListAdvices";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState<Favorite>(
    JSON.parse(localStorage.getItem("fav") ?? "[]") as Favorite
  );

  return (
    <BrowserRouter>
      <div className={openModal ? "opened-model" : ""}>
        {openModal && <Modal setOpenModal={setOpenModal} />}
        <Nav
          setOpenModal={setOpenModal}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                favorite={favorite}
                setFavorite={setFavorite}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <Fav
                favorite={favorite}
                setFavorite={setFavorite}
                search={search}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
