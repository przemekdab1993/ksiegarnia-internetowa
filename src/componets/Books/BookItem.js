import React from "react";

import styles from "./BookItem.module.css";

import Card from "../UserInterface/Card";

const BookItem = (props) => {
    return (
        <Card className={styles["book-card"]} >
          <div className={styles["book-img"]}>
            <div className={styles["img"]} style={{backgroundImage: `url("/assets/images/books/${props.id}.jpg")`}} ></div>

          </div>
          <h3>{props.title}</h3>
          <div className="book-options">
            <a href="#">
              <button className={`${styles["book-box-button"]} ${styles["button-info"]}`}>Show more</button>
            </a>
            <a href="#">
              <button className={`${styles["book-box-button"]} ${styles["button-add"]}`}>Add</button>
            </a>
          </div>
        </Card>
    );
}

export default BookItem;