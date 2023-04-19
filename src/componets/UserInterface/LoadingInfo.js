import React from "react";

import styles from "./LoadingInfo.module.css";

const LoadingInfo = (props) => {

    return (
        <div className={`${styles.loading_info} ${props.className}`}>
            <p>Loading...</p>
        </div>
    );
}

export default LoadingInfo;