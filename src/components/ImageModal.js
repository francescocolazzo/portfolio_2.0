import React from "react";
import "./modal.css";
import Modal from "react-bootstrap/Modal";

export default function ImageModal(props) {
  const { show, onHide, imageUrl, ml } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ marginLeft: ml ? '-15%' : '-20%' }}    >
      <Modal.Body>
        <div
          className="modal_img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </Modal.Body>
    </Modal>
  );
}
