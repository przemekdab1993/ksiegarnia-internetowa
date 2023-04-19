import React from "react";

import styles from "./HeaderSection.module.css";

import Menu from "./Menu";

const HeaderSection = () => {
    return (
      <React.Fragment>
        <div className={styles["top-container"]}>
          <h1 className={styles["logo"]}>Online Bookstore</h1>
          <Menu></Menu>
        </div>
      </React.Fragment>
    );
}

export default HeaderSection;