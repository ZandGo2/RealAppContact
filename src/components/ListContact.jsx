import React, { useContext } from "react";
import { UserProvider } from "../router/Router";
import styles from "./listContact.module.css";
import Contact from "./Contact";

const ListContact = () => {
  const data = useContext(UserProvider);

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Contact key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListContact;
