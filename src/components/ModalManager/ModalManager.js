import React from "react";
import ReactDOM from "react-dom";
import "./ModalManager.scss";
import { useModal } from "contexts/modalContext";

const ModalManager = ({ children }) => {
  const { getModal, setModal, closeModal } = useModal();
  console.log(getModal());
  const Modal = getModal();
  if (Modal === null) return null;
  
  return ReactDOM.createPortal(
    <div className="modal__background">
      <div className="modal__container">{children}</div>
    </div>,
    document.body
  );
};

export default ModalManager;
