import React from 'react';
import styles from "./listContact.module.css";

const Search = () => {
    return (
        <div className={styles.searchDivAll}>
            <div className={styles.searchDiv}>
                <label>Search In Contact</label>
                <input type="text"/>
            </div>
            <div className={styles.deleteBtn}>
                <button>✔✔</button>
            </div>
            <div className={styles.addBtn}>
                <button>Add Contact</button>
            </div>
        </div>
    );
};

export default Search;