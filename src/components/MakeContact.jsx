import React, { useReducer } from "react";
import icon from "../assets/iconContactList.png";
import styles from "./makecontact.module.css";
import { validate } from "../utils/validateData";

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
  const { name, value, errors } = action.payload;

  switch (action.type) {
    case "FILLING":
      return { ...state, person: { ...state.person, [name]: value } };
    case "TOUCHING":
      return { ...state, touch: { ...state.touch, [name]: true } };
    case "ERROR":
      return { ...state, valitateError: errors };
  }
};

const MakeContact = () => {
  const [dataPerson, dispatch] = useReducer(reducer, initialState);
  const { name, email, job, phone } = dataPerson.person;

  const changeHandler = async (e) => {
    const event = {
      name: e.target.name,
      value: e.target.value,
      errors: validate(dataPerson.person),
    };
    dispatch({ type: "FILLING", payload: event });
    dispatch({ type: "TOUCHING", payload: event });
    dispatch({ type: "ERROR", payload: event });
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
          <button className={styles.btnSubmit}>Add Contact</button>
        </form>
      </div>
    </>
  );
};

export default MakeContact;
