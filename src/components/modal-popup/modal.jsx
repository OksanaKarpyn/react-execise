import React from "react";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      ModalPopup
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          {header ? header : "header"}
        </div>
        <div className="body">{body ? body : "body"}</div>
        <div className="footer">
          <div>{footer ? footer : <h1>footer</h1>}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
