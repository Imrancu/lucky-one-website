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
    const addAnimalName = [...cart, animal];
    setCart(addAnimalName);
  };
  const emptyData = () => {
    const empty = [];
    setCart(empty);
  };
  const showRandomItem = () => {
    const randomItem = cart;
    const randomMath =
      randomItem[Math.floor(randomItem.length * Math.random())];
    const newRandom = [randomMath];
    setCart(newRandom);
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
        {cart.map((cart) => (
          <Cart cart={cart} />
        ))}
        <button className="btn-show-item" onClick={showRandomItem}>
          Show One Item
        </button>
        <br />
        <button className="btn-empty-item" onClick={emptyData}>
          Empty All Item
        </button>
      </div>
    </div>
  );
};

export default Shop;
