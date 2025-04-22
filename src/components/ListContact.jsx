import React, { useContext } from "react";
import { UserProvider } from "../pages/HomePage";
import styles from "./listContact.module.css";
import personIcon from "../assets/3.png";
import phoneIcon from "../assets/2.png";
import jobIcon from "../assets/4.jpg";
import emailIcon from "../assets/1.webp";

const ListContact = () => {
  const data = useContext(UserProvider);

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item.id} className={styles.spanDiv}>
          <span>
            <img src={personIcon} alt="iconPerson" /> {item.name}
          </span>
          <span>
            <img src={emailIcon} alt="iconEmail" /> {item.email}
          </span>
          <span>
            <img src={jobIcon} alt="iconJob" /> {item.job}
          </span>
          <span>
            <img src={phoneIcon} alt="iconPhone" /> {item.phone}
          </span>
          <button>...</button>
        </div>
      ))}
    </div>
  );
};

export default ListContact;
