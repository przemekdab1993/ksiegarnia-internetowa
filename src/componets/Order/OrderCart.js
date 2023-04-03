import React, {useContext} from "react";

import styles from "./OrderCart.module.css";

import Card from "../UserInterface/Card";
import AuthContext from "../../store/auth-context";
import BooksContext from "../../store/books-context";
import OrderItem from "./OrderItem";

const OrderCart = (props) => {

  const authCtx = useContext(AuthContext);
  const bookCtx = useContext(BooksContext);

  let totality = 0;

  return (
    <Card className={styles["order-cart"]}>
      <button className={styles["btn-close"]} onClick={props.onHidden}>X</button>
      <h2>Your order list</h2>
      {(authCtx.userOrder.orderList.length <= 0) ? (

        <div className={styles["order-list"]} >{(authCtx.userOrder.status === 'ORDER_SENT') ? (
          <p>Your order is sent.</p>
        ) : (<p>Your shopping cart is empty.</p>)}</div>
      ) : (
        <div className={styles["order-list"]}>
          {authCtx.userOrder.orderList.map((item) => {
            let bookInfo = bookCtx.booksList.filter((book) => {
              return book.id === item.productId;
            })

            if (bookInfo.length === 1) {
              bookInfo = bookInfo[0];
              totality += item.amount * bookInfo.price;

              return(
                <OrderItem
                  key={item.productId}
                  productId={item.productId}
                  amount={item.amount}
                  title={bookInfo.title}
                  price={bookInfo.price}
                />);
            }

          })}
          <div className={styles["products-totality"]}>
            Totality: <span>{totality.toFixed(2)}$</span>
          </div>
        </div>
      )}
      <div className={styles["modal-bottom-nav"]}>
        <button className={styles["btn-close"]} onClick={authCtx.onClearOrder}>Clear</button>
        <button className={styles["btn-order-send"]} onClick={authCtx.onSendOrder}>Order</button>
      </div>
    </Card>
  );
}

export default OrderCart;