import React, {useContext} from "react";

import styles from "./BooksList.module.css";

import BookItem from "./BookItem";
import BooksContext from "../../store/books-context";
import LoadingInfo from "../UserInterface/LoadingInfo";

const BooksList = (props) => {

  const booksCtx = useContext(BooksContext);

  return (
    <div className={styles["books-container"]}>
        {booksCtx.error && (<p>{booksCtx.error}</p>)}
        {(booksCtx.loadingData) ? (
            <LoadingInfo className={styles["loading-book-list"]}></LoadingInfo>
        ) : (
            booksCtx.booksList.map((book) => {
                    return (
                        <BookItem
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            price={book.price}
                            quantity={book.quantity}
                        >
                        </BookItem>);
                }
            )
        )}

      { }
    </div>
  );
}

export default BooksList;