import React, { useEffect, useReducer } from "react";
import icon from "../assets/iconContactList.png";
import styles from "./makecontact.module.css";
import { validate } from "../utils/validateData";
import axios from "axios";

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
  valitateError: {
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
      return { ...state, valitateError: errors, touch: touch };
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
    e.preventDefault();
    validatePesonData();
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
            {dataPerson.valitateError.name && dataPerson.touch.name ? (
              <p>{dataPerson.valitateError.name}</p>
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
            {dataPerson.valitateError.email && dataPerson.touch.email ? (
              <p>{dataPerson.valitateError.email}</p>
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
            {dataPerson.valitateError.phone && dataPerson.touch.phone ? (
              <p>{dataPerson.valitateError.phone}</p>
            ) : (
              ""
            )}
          </div>
          <button className={styles.btnSubmit} onClick={submitHandler}>
            Add Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default MakeContact;
