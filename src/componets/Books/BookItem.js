import React, {useContext, useRef, useState} from "react";

import styles from "./BookItem.module.css";

import Card from "../UserInterface/Card";
import AuthContext from "../../store/auth-context";

const BookItem = (props) => {
  const [amountProduct, setAmountProduct] = useState(1);
  const authCtx = useContext(AuthContext);
  const amountInputRef = useRef();

  const amountChangeChandler = (event) => {
    const changeType = event.target.dataset.set;

    if (changeType === "up" && amountProduct < props.quantity) {
      setAmountProduct(prevState => {
        return prevState + 1;
      });
    }
    else if (changeType === "down" && amountProduct > 1) {
      setAmountProduct(prevState => {
        return prevState - 1;
      });
    }
  }
  const amountManualChangeChandler = (event) => {
    const value = event.target.value;

    setAmountProduct(prevState => {
      return +value;
    })
  }


  const addProductOrderChandler = (event) => {
    event.preventDefault();
    const productId = event.target.dataset.productId;

    authCtx.onAddProduct({type:"ADD_PRODUCT", productId: productId, amount: amountProduct});
    setAmountProduct(1);
  }

  return (
    <Card className={styles["book-card"]}>
      <div className={styles["book-img"]}>
        <div className={styles["img"]} style={{backgroundImage: `url("/assets/images/books/${props.id}.jpg")`}}></div>

      </div>
      <h3>{props.title}</h3>
      <div className="book-options">
        {/*<a href="#">*/}
        {/*  <button className={`${styles["book-box-button"]} ${styles["button-info"]}`}>Show more</button>*/}
        {/*</a>*/}
        <form>
          <button
              className={styles["book-box-amount-button"]}
              onClick={amountChangeChandler}
              data-set="down"
              type="button"
          >-</button>
          <input
            ref={amountInputRef}
            className={styles["book-box-amount-input"]}
            onChange={amountManualChangeChandler}
            name={`amount_${props.id}`}
            type="number"
            min="1"
            max={props.quantity}
            step="1"
            value={amountProduct}
          />
          <button
              className={styles["book-box-amount-button"]}
              onClick={amountChangeChandler}
              data-set="up"
              type="button"
          >+</button>
          <button
            className={`${styles["book-box-button"]} ${styles["button-add"]}`}
            onClick={addProductOrderChandler}
            data-product-id={props.id}
          >Add</button>
        </form>
      </div>
    </Card>
  );
}

export default BookItem;