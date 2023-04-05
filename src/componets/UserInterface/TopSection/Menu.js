import React, {useCallback, useContext, useEffect, useState} from "react";

import styles from "./Menu.module.css";
import AuthContext from "../../../store/auth-context";
import Modal from "../Modal/Modal";
import OrderCart from "../../Order/OrderCart";

const Menu = (props) => {

  const authCtx = useContext(AuthContext);
  const [cartModalActive, setCartModalActive] = useState(false);
  const [orderItemsCount, setOrderItemsCount] = useState(0);

  const {orderList: orderList} = authCtx.userOrder;

  useEffect(()=> {

    const changeOrderCount = setTimeout( () => {
        // zredukowane do 1 linii kodu
      // let tempCount = orderList.map((item) => {
      //   return item.amount;
      // });
      // if (tempCount.length <= 0) {
      //   setOrderItemsCount(0);
      // }
      // else {
      //   setOrderItemsCount( tempCount.reduce((prev, curr) => parseInt(prev + curr), 0) );
      // }

        setOrderItemsCount( orderList.reduce((prev, curr) => parseInt(prev + curr.amount), 0) );

    }, 800);

    return () => {
      clearTimeout(changeOrderCount);
    }
  }, [orderList]);

  const showOrderModalHandler = () => {
    setCartModalActive(true);
  }

  const hiddenOrderModalHandler = useCallback(() => {
    setCartModalActive(false);
  }, []);

  return (
    <React.Fragment>
      {cartModalActive && (
        <Modal onHidden={hiddenOrderModalHandler}>
            <OrderCart onHidden={hiddenOrderModalHandler} />
        </Modal>
      )}
      <nav className={styles["top-menu"]}>
        <ul className={styles["top-menu-list"]}>
          <li className={styles["top-menu-item"]}>
            <a href="#">Home</a>
          </li>
          <li className={styles["top-menu-item"]}>
            <a href="#" onClick={showOrderModalHandler}>Your Order <span className={styles["user-order-count"]}>{orderItemsCount}</span></a>
          </li>
          {authCtx.isLoggedIn && (
            <li className={styles["top-menu-item"]}>
              <a href="#">Collection</a>
            </li>
          )}
          {authCtx.isLoggedIn ? (
            <li className={styles["top-menu-item"]}>
              <a href="#">Logout</a>
            </li>
          ) : (
            <li className={styles["top-menu-item"]}>
              <a href="#">Login</a>
            </li>
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Menu;