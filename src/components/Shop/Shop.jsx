import React, { useEffect, useState } from "react";
import Animals from "../Animals/Animals";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [animals, setAnimals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("animal.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  const handleAddToCart = (animal) => {
    console.log(animal);
    const addAnimalName = [...cart, animal];
    setCart(addAnimalName);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {animals.map((animal) => (
          <Animals
            key={animal.id}
            animal={animal}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
