import React, {useContext} from "react";

import styles from "./BooksList.module.css";

import Card from "../UserInterface/Card";
import BookItem from "./BookItem";
import BooksContext from "../../store/books-context";

const BooksList = (props) => {

  const booksCtx = useContext(BooksContext);

  return (
    <div className={styles["books-container"]}>
      {
        booksCtx.booksList.map((book) => {
          return (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              price={book.price}
            >
            </BookItem>);
          }
        )}
    </div>
  );
}

export default BooksList;