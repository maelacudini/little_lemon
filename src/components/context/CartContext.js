import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (item) => {
      const updatedItems = [...cartItems];
      const existingItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        updatedItems[existingItemIndex].quantity += 1;
      } else {
        updatedItems.push({ ...item, id: Date.now(), quantity: 1 });
      }
  
      setCartItems(updatedItems);
    };
  
    const removeFromCart = (itemId) => {
      const updatedItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedItems);
    };
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    );
  };
  

export { CartContext, CartProvider };
