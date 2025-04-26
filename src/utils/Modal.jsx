import React from "react";
import styles from "./modal.module.css";

const Modal = ({ showHandler, idDelete, deleteHandler,number }) => {
  return (
    <div className={styles.container}>
      <div className={styles.divP}>
        <p>You are deleting {number ? number : 1} contact.</p>
        <p>Are you sure?</p>
      </div>
      <div className={styles.BtnDIv}>
        <button onClick={() => showHandler("closeModal")}>Cancellation</button>
        <button onClick={() => deleteHandler(idDelete)}>Confirm</button>
      </div>
    </div>
  );
};

export default Modal;
