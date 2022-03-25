import React from "react";
import "./Card.css";

const Card = (props) => {
  const { name, image, price } = props.animal;
  console.log(name);
  return (
    <div className="card-container">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h1>{name}</h1>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Card;
