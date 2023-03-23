import React, {useContext} from "react";

import styles from "./OrderCart.module.css";

import Card from "../UserInterface/Card";
import AuthContext from "../../store/auth-context";

const OrderCart = () => {

  const authCtx = useContext(AuthContext);

  return (
    <Card className={styles["order-cart"]}>
      <h2>Your order list</h2>
      {(authCtx.userOrder.length <= 0) ? (
        <div>Your shopping cart is empty</div>
      ) : (
        authCtx.userOrder.map((item) => {
          return(
            <div>{item.title}</div>
          );
        })
      )}
    </Card>
  );
}

export default OrderCart;