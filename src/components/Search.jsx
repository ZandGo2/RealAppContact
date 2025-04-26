import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import styles from "./listContact.module.css";
import { Link } from "react-router-dom";
import { UserProvider } from "../router/Router";
import { UserDeleteGroup } from "../router/Router";
import { SearchContactApi, DeleteContactApi } from "../services/Api";
import { notify } from "../utils/notify";
import Modal from "../utils/Modal";

const Search = () => {
  const { data, setData } = useContext(UserProvider);
  const { deleteGroup, setDeleteGroup } = useContext(UserDeleteGroup);
  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);

  useEffect(() => {
    // axios
    // .get(SearchContactApi(search))
    // .then((res) => console.log(res.data));
    const filterData = data.filter((item) => {
      return item.name.toLowerCase().startsWith(search.toLowerCase());
    });
    setData(filterData);
  }, [search]);

  const clickHandler = (type) => {
    if (type == "ret") {
      setIsShow(false);
      setDeleteGroup((item) => ({ ...item, check: false }));
    } else {
      setIsShow(true);
      setDeleteGroup((item) => ({ ...item, check: true }));
    }
  };

  const deleteHandler = () => {
    for (const i of deleteGroup.dataContact) {
      axios
        .delete(DeleteContactApi(i))
        .then((res) => console.log(res))
        .then(notify("success", "Delete successfully"))
        .catch(() => notify("error", "You have error"));
    }
  };

  const showHandler = () =>{
    setIsShowDelete(false)
  }

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
        <button
          className={isShow ? styles.none : styles.deleteBtn}
          onClick={() => clickHandler()}
        >
          ✔✔
        </button>
        <button
          className={isShow ? styles.deleteBtn : styles.none}
          onClick={() => clickHandler("ret")}
        >
          ↩
        </button>
        <button
          className={isShow ? styles.deleteBtn : styles.none}
          onClick={()=> setIsShowDelete(true)}
        >
          🗑
        </button>
      </div>
      <div className={styles.addBtn}>
        <Link to="make-contact">Add Contact</Link>
      </div>
      {!!isShowDelete && <Modal deleteHandler={deleteHandler} showHandler={showHandler} number={deleteGroup.dataContact.length}/>}
      <ToastContainer />
    </div>
  );
};

export default Search;
