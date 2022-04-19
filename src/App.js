import { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import ListAdvices from './Components/ListAdvices';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      {/* {openModal && <div></div>} */}
      <Nav className="item" setOpenModal={setOpenModal} />
      <ListAdvices />
    </div>
  );
}

export default App;
