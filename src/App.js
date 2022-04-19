/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import ListAdvices from './Components/ListAdvices';
import Search from './Components/Search';


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState();
  return (
    <div className="App">
      {/* {openModal && <div></div>} */}
      <ListAdvices />
      <Nav setOpenModal={setOpenModal} />
      <Search search={search}/>
    </div>
  );
}

export default App;
