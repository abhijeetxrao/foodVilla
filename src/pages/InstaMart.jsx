import React, { useState } from 'react';

const InstaMart = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Milk', price: 45, image: '🥛' },
    { id: 2, name: 'Bread', price: 30, image: '🍞' },
    { id: 5, name: 'Cheese', price: 150, image: '🧀' },
    { id: 3, name: 'Eggs', price: 60, image: '🥚' },
    { id: 4, name: 'Butter', price: 120, image: '🧈' },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="insta-mart">
      <h1>InstaMart - Quick Delivery</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-count">Cart Items: {cartItems.length}</div>
    </div>
  );
};

export default InstaMart;