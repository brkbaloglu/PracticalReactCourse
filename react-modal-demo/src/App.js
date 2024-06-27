import { useState } from 'react';
import './App.css';
import Modal from "react-modal"


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal isOpen={true} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)} style={{overlay: {backgroundColor: "grey"}, content: {color: "orange"}}}>
        <h2>Modal title</h2>
        <p>Modal body</p>
      </Modal>
    </div>
  );
}

export default App;
