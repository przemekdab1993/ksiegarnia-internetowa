import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <ul className={styles["footer-menu"]}>
        <li><a className={styles["link-clear"]} href="#">Terms</a></li>
        <li><a className={styles["link-clear"]} href="#">Privacy</a></li>
        <li><a className={styles["link-clear"]} href="#">Contact</a></li>
      </ul>
      Przemysław Dąbrowski &copy; 2023 v 0.1.0
    </footer>
  );
}

export default Footer;