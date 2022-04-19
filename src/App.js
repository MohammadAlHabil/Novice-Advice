/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Search from './Components/Search';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState();
  return (
    <div className="App">
      {/* {openModal && <div></div>} */}
      <Nav setOpenModal={setOpenModal} />
      <Search search={search}/>
    </div>
  );
}

export default App;
