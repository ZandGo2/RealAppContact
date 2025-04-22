import React, { useReducer } from "react";
import icon from "../assets/iconContactList.png";
import styles from "./makecontact.module.css";
import axios from "axios";
import { MakeContactPersonApi } from "../services/Api.js";
import { validate } from "../utils/validateData";
import { notify } from "../utils/notify.js";
import { ToastContainer } from "react-toastify";

const initialState = {
  person: {
    name: "",
    email: "",
    job: "",
    phone: "",
  },
  touch: {
    name: false,
    email: false,
    job: false,
    phone: false,
  },
  errors: {
    name: "",
    email: "",
    job: "",
    phone: "",
  },
};

const reducer = (state, action) => {
  const { name, value, errors, touch } = action.payload;

  switch (action.type) {
    case "FILLING":
      return {
        ...state,
        person: { ...state.person, [name]: value },
        touch: { ...state.touch, [name]: true },
      };
    case "ERROR":
      return { ...state, errors: errors, touch: touch };
    // default : return
  }
};

const MakeContact = () => {
  const [dataPerson, dispatch] = useReducer(reducer, initialState);
  const { name, email, job, phone } = dataPerson.person;

  const changeHandler = (e) => {
    const event = {
      name: e.target.name,
      value: e.target.value,
    };
    dispatch({ type: "FILLING", payload: event });
  };

  const validatePesonData = () => {
    const event = {
      errors: validate(dataPerson.person),
      touch: {
        name: true,
        email: true,
        job: true,
        phone: true,
      },
    };
    dispatch({ type: "ERROR", payload: event });
  };

  const submitHandler = (e) => {
    const { name, email, phone } = dataPerson.errors;
    e.preventDefault();
    validatePesonData();
    if (name && email && phone) {
      axios
        .post(MakeContactPersonApi(), { title: dataPerson.person })
        .then((res) => console.log(res))
        .then(() => notify("success", "Add successfully"));
    } else {
      notify("error", "You have error");
    }
  };

  return (
    <>
      <div className={styles.imgContactListDiv}>
        <img src={icon} alt="iconContactList" />
      </div>
      <div>
        <form>
          <div className={styles.inputDiv}>
            <label>Name and lastName :</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={changeHandler}
              placeholder="name ....."
            />
          </div>
          <div className={styles.errorDiv}>
            {dataPerson.errors.name && dataPerson.touch.name ? (
              <p>{dataPerson.errors.name}</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.inputDiv}>
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={changeHandler}
              placeholder="email ....."
            />
          </div>
          <div className={styles.errorDiv}>
            {dataPerson.errors.email && dataPerson.touch.email ? (
              <p>{dataPerson.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.inputDiv}>
            <label>Job :</label>
            <input
              type="text"
              name="job"
              value={job}
              onChange={changeHandler}
              placeholder="job ....."
            />
          </div>
          <div className={styles.inputDiv}>
            <label>Phone :</label>
            <input
              type="number"
              min="0"
              name="phone"
              value={phone}
              onChange={changeHandler}
              placeholder="phone ....."
            />
          </div>
          <div className={styles.errorDiv}>
            {dataPerson.errors.phone && dataPerson.touch.phone ? (
              <p>{dataPerson.errors.phone}</p>
            ) : (
              ""
            )}
          </div>
          <button className={styles.btnSubmit} onClick={submitHandler}>
            Add Contact
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default MakeContact;
