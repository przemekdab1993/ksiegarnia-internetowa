import React from "react";

import styles from "./Books.module.css";

import Card from "../UserInterface/Card";



const BookFilters = () => {
    return (
        <div>
          <Card className={styles["book-filter-container"]}>
          </Card>
        </div>
    );
}

export default React.memo(BookFilters);