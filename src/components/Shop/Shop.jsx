import React, { useEffect, useState } from "react";
import Animals from "../Animals/Animals";
import "./Shop.css";

const Shop = () => {
  const [animals, setAnimals] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("animal.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  const handleAddToCart = (animal) => {
    console.log(animal);
    const addAnimalName = [...name, animal];
    setName(addAnimalName);
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
        <h2>Selected Animals</h2>
        <p>Animal Count: {name.length}</p>
      </div>
    </div>
  );
};

export default Shop;
