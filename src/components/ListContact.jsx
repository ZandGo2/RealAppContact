import React, { useContext, useEffect, useState } from "react";
import { UserProvider } from "../router/Router";
import { UserDeleteGroup } from "../router/Router";
import styles from "./ListContact.module.css";
import Contact from "./Contact";

const ListContact = () => {
  const [listPerson, setListPerson] = useState([]);
  const { data } = useContext(UserProvider);
  const { deleteGroup,setDeleteGroup } = useContext(UserDeleteGroup);

  useEffect(() => {
    setListPerson(data);
  }, [data]);

  return (
    <div className={styles.container}>
      {listPerson.map((item) => (
        <Contact key={item.id} data={item} deleteGroup={deleteGroup} setDeleteGroup={setDeleteGroup} />
      ))}
    </div>
  );
};

export default ListContact;
