import React, { useContext, useEffect, useState } from "react";
import { UserProvider } from "../router/Router";
import styles from "./listContact.module.css";
import Contact from "./Contact";

const ListContact = () => {

  const [listPerson, setListPerson] = useState([])
  const {data} = useContext(UserProvider);

  useEffect(()=>{
    setListPerson(data)
  },[data])

  return (
    <div className={styles.container}>
      {listPerson.map((item) => (
        <Contact key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListContact;
