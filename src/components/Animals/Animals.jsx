import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./Animals.css";

const Animals = ({ handleAddToCart, animal }) => {
  const { name, image, price } = animal;

  return (
    <div className="animal">
      <img src={image} alt="" />
      <div className="animal-info">
        <h2>{name}</h2>
        <h4>Price: ${price}</h4>
      </div>
      <button onClick={() => handleAddToCart(animal)} className="btn-cart">
        <p>Add To Cart</p>
        <MdOutlineAddShoppingCart className="space" />
      </button>
    </div>
  );
};

export default Animals;
