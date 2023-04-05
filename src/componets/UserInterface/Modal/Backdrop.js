import React from "react";

import styles from "./Backdrop.module.css";

const Backdrop = (props) => {

    return (
        <div
            className={styles["backdrop"]}
            onClick={props.onHidden}
        >

        </div>
    );
}
export default React.memo(Backdrop);