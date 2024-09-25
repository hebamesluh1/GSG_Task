import React from "react";
import styles from "./card.module.css";

const Card = ({ image, name, category, price }) => {
  return (
    <div className={styles.productItem}>
      <img src={image} alt="product image" />
      <div className={styles.titleBG}></div>
      <h2>{name}</h2>
      <div className={styles.description}>
        <p>Category: {category}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
};

export default Card;
