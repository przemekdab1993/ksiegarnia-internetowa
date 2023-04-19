// import styled from "styled-components";
//
// const Card = styled.div`
//     border-radius: 12px;
//     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.50);
//     margin-bottom: 15px;
// `;

import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {

  const className = 'card ' + props.className;

  return (
    <div className={`${styles.card} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card;