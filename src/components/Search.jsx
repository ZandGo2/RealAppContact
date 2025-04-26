import { useContext } from "react";
import styles from "./listContact.module.css";
import { Link } from "react-router-dom";
import { UserProvider } from "../router/Router";

const Search = () => {
  const data = useContext(UserProvider);
  // console.log(data);
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
