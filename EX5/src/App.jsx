import React, { useState } from 'react';
import ProductList from './components/productList';
import Cart from './components/cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    { id: 1, name: 'Apple', price: 2 },
    { id: 2, name: 'Milk', price: 5 },
    { id: 3, name: 'Juice', price: 3 },
  ];

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item
        )
      );
    }
  };

  const removeItem = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Shopping App</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList products={products} addToCart={addToCart} />
        </div>
        <div className="col-md-4">
          <Cart
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            removeItem={removeItem} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
