import React from "react";
import ReactDOM from "react-dom";
import "./ModalManager.scss";
import { useModal } from "contexts/modalContext";

const ModalManager = () => {
  const { getModal } = useModal();
  console.log(getModal());
  const Modal = getModal();
  
  return Modal ? ReactDOM.createPortal(<Modal />, document.body) : null; 
};

export default ModalManager;
