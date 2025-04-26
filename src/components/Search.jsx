import { useContext, useEffect, useState } from "react";
import styles from "./listContact.module.css";
import { Link } from "react-router-dom";
import { UserProvider } from "../router/Router";
import { SearchContactApi } from "../services/Api";
import axios from "axios";

const Search = () => {
  const { data, setData } = useContext(UserProvider);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // axios
    // .get(SearchContactApi(search))
    // .then((res) => console.log(res.data));
    const filterData = data.filter((item) => {
      return item.name.toLowerCase().startsWith(search.toLowerCase());
    });
    setData(filterData);
  }, [search]);

  return (
    <div className={styles.searchDivAll}>
      <div className={styles.searchDiv}>
        <label>Search In Contact</label>
        <input
          type="text"
          name="name"
          value={search}
          onChange={(e) => {
            setSearch(() => e.target.value);
          }}
          placeholder="search by name ....."
        />
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
