import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const { name, id } = cart;
  return (
    <div className="cart">
      <h3 key={id}>{name}</h3>
    </div>
  );
};

export default Cart;
