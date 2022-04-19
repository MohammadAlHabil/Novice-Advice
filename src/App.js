import { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      {/* {openModal && <div></div>} */}
      <Nav setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
