import React from "react";
const Modal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onClick} />

      <dialog open={true} className="modal">
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
