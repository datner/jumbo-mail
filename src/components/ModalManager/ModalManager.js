import React from "react";
import ReactDOM from "react-dom";
import { useModal } from "contexts/modalContext";

import "./ModalManager.scss";

const ModalManager = () => {
  const { getModal } = useModal();
  
  const Modal = getModal();
  return Modal ? ReactDOM.createPortal(<Modal />, document.body) : null;
};

export default ModalManager;
export { default as DefaultContainer } from "./DefaultContainer";
