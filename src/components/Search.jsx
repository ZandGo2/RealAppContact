import React from "react";
import styles from "./listContact.module.css";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className={styles.searchDivAll}>
      <div className={styles.searchDiv}>
        <label>Search In Contact</label>
        <input type="text" />
      </div>
      <div className={styles.deleteBtn}>
        <button>✔✔</button>
      </div>
      <div className={styles.addBtn}>
        <Link to="make-contact">Add Contact</Link>
      </div>
    </div>
  );
};

export default Search;
