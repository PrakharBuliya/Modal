import { useState } from "react";
import "./App.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>
        {show ? "hide" : "show"} modal
      </button>
      <Modal show={show} title="Modal" onClose={() => setShow(false)}>
        <h1>Basic Modal Functionality</h1>
      </Modal>
    </div>
  );
}

const Modal = ({ show, onClose, title, children }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose}></div>
        <div className="modal-wrapper">
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <span className="modal-close" onClick={onClose}>
              X
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </>
    )
  );
};
