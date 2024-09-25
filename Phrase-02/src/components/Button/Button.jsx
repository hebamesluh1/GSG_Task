import React from "react";
import styles from "./button.module.css";

const Button = ({ type, text, onClick, ...res }) => {
  return (
    <button
      className={styles.filterBtn}
      type={type}
      onClick={(category) => onClick(category)}
      {...res}
    >
      {text}
    </button>
  );
};

export default Button;
