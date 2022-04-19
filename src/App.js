import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import ListAdvices from './Components/ListAdvices';
import Search from './Components/Search';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      {openModal && <div></div>}
      <Nav setOpenModal={setOpenModal} />
      <Search search={search} setSearch={setSearch} />
      <ListAdvices search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
