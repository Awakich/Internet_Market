import React from "react";

const Modal = ({ onOpen, acitve, children }) => {
  return (
    <div onClick={onOpen} className="">
      <div onClick={(e) => e.stopPropagation()} className="">
        {children}
      </div>
    </div>
  );
};

export default Modal;
