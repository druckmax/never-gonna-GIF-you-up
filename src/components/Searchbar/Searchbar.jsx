import SearchBtn from "./SearchBtn";
import { MainContext } from "../../context/context";
import Header from "../Header/Header";
import styles from "./Searchbar.module.scss";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const context = useContext(MainContext);
  const navigate = useNavigate()

  const onChangeHandler = (e) => context.setInput(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    //*todo => setting the search query in the context
    context.fetchSearch(context.input);
    navigate('/')
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${styles.searchbar} ${
        context.theme === "dark" ? styles.dark : styles.light
      } `}
    >
      <Header />
      <div className={styles.searchbar_Content}>
        <input
          onChange={onChangeHandler}
          value={context.input}
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
