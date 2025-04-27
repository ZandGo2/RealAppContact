import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { notify } from "../utils/notify";
import axios from "axios";
import { DeleteContactApi } from "../services/Api";
import styles from "./ListContact.module.css";
import emailIcon from "../assets/1.webp";
import personIcon from "../assets/3.png";
import phoneIcon from "../assets/2.png";
import jobIcon from "../assets/4.jpg";
import Modal from "../utils/Modal";

const Contact = ({
  data: { name, email, job, phone, id },
  deleteGroup,
  setDeleteGroup,
}) => {
  const idDelete = id;
  const [isShow, setIsShow] = useState({
    btn: false,
    modals: false,
  });

  const showHandler = (id) => {
    switch (id) {
      case "openBtn":
        return setIsShow((show) => ({ ...show, btn: true }));
      case "closeModal":
        return setIsShow((show) => ({ ...show, modals: false }));
      case "openModal":
        return setIsShow((show) => ({ ...show, modals: true }));
    }
  };

  const deleteHandler = (id) => {
    axios
      .delete(DeleteContactApi(id))
      .then(
        () => showHandler("closeModal"),
        notify("success", "Delete successfully")
      )
      .catch(() => notify("error", "You have error"));
  };

  const checkHandler = () => {
    if (deleteGroup.dataContact.includes(idDelete)) {
      setDeleteGroup((item) => ({
        ...item,
        dataContact: item.dataContact.filter((id) => id !== idDelete),
      }));
    } else {
      setDeleteGroup((item) => ({
        ...item,
        dataContact: [...item.dataContact, idDelete],
      }));
    }
  };

  return (
    <>
      <div className={styles.spanDiv}>
        <span>
          <img src={personIcon} alt="iconPerson" /> {name}
        </span>
        <span>
          <img src={emailIcon} alt="iconEmail" /> {email}
        </span>
        <span>
          <img src={jobIcon} alt="iconJob" /> {job}
        </span>
        <span>
          <img src={phoneIcon} alt="iconPhone" /> {phone}
        </span>
        {deleteGroup.check ? (
          <div>
            <input type="checkbox" onClick={checkHandler} />
          </div>
        ) : (
          <div>
            <button
              className={isShow.btn ? styles.none : styles.show}
              onClick={() => {
                showHandler("openBtn");
              }}
            >
              ...
            </button>
            <button
              onClick={() => {
                showHandler("openModal");
              }}
              className={isShow.btn ? styles.btnHandler : styles.none}
            >
              Delete
            </button>
            <Link
              className={isShow.btn ? styles.btnHandler : styles.none}
              to={`/edite-contact/${idDelete}`}
            >
              Edite
            </Link>
          </div>
        )}
      </div>
      {!!isShow.modals && (
        <Modal
          showHandler={showHandler}
          deleteHandler={deleteHandler}
          idDelete={idDelete}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default Contact;
