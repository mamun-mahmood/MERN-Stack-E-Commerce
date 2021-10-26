import React from "react";
import { Modal, Button } from "react-bootstrap";
import ChatBar from "./ChatBar/ChatBar";
import Sidebar from "./Sidebar/Sidebar";
import "./modal.css";
export default function ModalContainer(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal_main round"
    >
      <Modal.Body className="modal_body bg-light round">
        <Sidebar />
        <ChatBar />
      </Modal.Body>
    </Modal>
  );
}
