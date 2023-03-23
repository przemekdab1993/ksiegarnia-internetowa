import React, {useState} from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

import Backdrop from "./Backdrop";
import OrderCart from "../../Order/OrderCart";

const Modal = (props) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        (<Backdrop onHidden={props.onHidden}></Backdrop>),
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        (<OrderCart></OrderCart>),
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
}

export default Modal;