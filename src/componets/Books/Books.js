import React, {useContext} from "react";

import styles from "./Books.module.css";

import BookFilters from "./BookFilters";
import BooksList from "./BooksList";
import {BooksContextProvider} from "../../store/books-context";

const Books = () => {

  return (
    <div className={styles["main-container"]}>
      <BooksContextProvider>
        <BookFilters></BookFilters>
        <BooksList></BooksList>
      </BooksContextProvider>
    </div>
  );
}

export default Books;