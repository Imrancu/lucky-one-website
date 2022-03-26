import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const { name } = cart;
  return (
    <div className="cart">
      <h3>{name}</h3>
    </div>
  );
};

export default Cart;
