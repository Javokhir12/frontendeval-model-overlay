import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const acceptOffer = () => {
    setAccepted(true);
    setOpen(false);
  };
  return (
    <div className="App">
      {!open && !accepted && (
        <Button text="Show offer" handleClick={openModal} />
      )}
      {open && <Modal handleClose={closeModal} handleAccept={acceptOffer} />}
      {accepted && <p>Offer accepted!!!</p>}
    </div>
  );
}

export default App;
