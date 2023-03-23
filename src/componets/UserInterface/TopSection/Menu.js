import React, {useContext, useState} from "react";

import styles from "./Menu.module.css";
import AuthContext from "../../../store/auth-context";
import Modal from "../Modal/Modal";

const Menu = (props) => {

  const authCtx = useContext(AuthContext);
  const [cartModalActive, setCartModalActive] = useState(false);

  const showOrderModalHandler = () => {
    setCartModalActive(true);
  }

  const hiddenOrderModalHandler = () => {
    setCartModalActive(false);
  }

  return (
    <React.Fragment>
      {cartModalActive && (
        <Modal onHidden={hiddenOrderModalHandler}></Modal>
      )}
      <nav className={styles["top-menu"]}>
        <ul className={styles["top-menu-list"]}>
          <li className={styles["top-menu-item"]}><a href="#">Home</a></li>
          <li className={styles["top-menu-item"]}><a href="#" onClick={showOrderModalHandler}>Your Order <span className={styles["user-order-count"]}>{authCtx.userOrder.length}</span></a></li>
          {authCtx.isLoggedIn && (
            <li className={styles["top-menu-item"]}><a href="#">Collection</a></li>
          )}
          {authCtx.isLoggedIn ? (
            <li className={styles["top-menu-item"]}><a href="#">Logout</a></li>
          ) : (
            <li className={styles["top-menu-item"]}><a href="#">Login</a></li>
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Menu;