import React from "react";
import { useModal } from "contexts/modalContext";

const DefaultContainer = ({ children }) => {
  const { closeModal } = useModal();
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default DefaultContainer;
