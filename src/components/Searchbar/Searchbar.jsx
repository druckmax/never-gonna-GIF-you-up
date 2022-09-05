import SearchBtn from "./SearchBtn";
import styles from "./Searchbar.module.scss";

import React, { useState } from "react";

function Searchbar() {
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => setInput(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    //*todo => setting the search query in the context
  };

  return (
    <form onSubmit={submitHandler} className={styles.searchbar}>
      <div className={styles.searchbar_Content}>
        <input
          onChange={onChangeHandler}
          value={input}
          type="text"
          className={styles.searchInput}
          placeholder="Search for a GIF :)"
        />
        <div></div>
        <SearchBtn />
      </div>
    </form>
  );
}

export default Searchbar;
