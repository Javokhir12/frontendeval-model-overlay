import Button from "./Button";

function Modal({ handleClose, handleAccept }) {
  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <p>Click the button below to accept our amazing offer!</p>
        <Button text="Accept offer" handleClick={handleAccept} />
      </div>
    </div>
  );
}

export default Modal;
