import React, { useState } from "react";
import Modal from "./modal";
import "./style.css";
const ModalText = () => {
  const [showModal, setShowModal] = useState(false);
  function handleModalPopup() {
    setShowModal(!showModal);
  }
  function onClose() {
    setShowModal(false);
  }
  return (
    <div>
      <button onClick={handleModalPopup}>open modal popup</button>
      {showModal && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          body={<div>customize body</div>}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default ModalText;
