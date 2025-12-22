import { createContext, useState, useEffect } from "react";

// 1. Create the Context with default values
export const CartContext = createContext({
  items: [],
  totalPrice: 0,
  totalItems: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  // Initialize state from LocalStorage if it exists, otherwise empty array
  const [items, setItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync cart to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // ACTION: Add item to cart
  const addToCart = (product) => {
    setItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === product.id);

      if (isItemInCart) {
        // If item exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      // If item is new, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // ACTION: Remove specific item
  const removeFromCart = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // ACTION: Increase/Decrease Quantity
  const updateQuantity = (id, type) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = type === "increment" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  const clearCart = () => setItems([]);

  // DERIVED STATE: Calculate totals on the fly
  const totalItems = items.reduce((acc, curr) => acc + (curr.quantity || 0), 0);
  const totalPrice = items.reduce((acc, curr) => acc + (curr.price / 100) * curr.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};