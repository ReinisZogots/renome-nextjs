import React from "react";
import Structure from "../structure.json";
import styles from "../../styles/cart.module.scss"

const Cart = () => {
  const cart = Structure.cart;

  return (
    <div className={styles.cart}>
      {cart.map((cartItem, index) => {
        return (
          <a className={styles.cart__item} href={cartItem.url} key={index}>
            {cartItem.title}
          </a>
        );
      })}
    </div>
  );
};

export default Cart;
