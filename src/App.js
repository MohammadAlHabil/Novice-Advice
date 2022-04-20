import React, { useState } from 'react';
import './App.css';
import { Nav, ListAdvices, Modal } from './Components';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');
  return (
    <div className={openModal ? 'opened-model' : ''}>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <Nav setOpenModal={setOpenModal} search={search} setSearch={setSearch} />
      <ListAdvices search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
