import React from 'react';

const Cart = ({ cartItems, addToCart, removeFromCart, removeItem }) => (
  <div className="card text-bg-dark mb-3" style={{ maxWidth: '18rem' }}>
    <div className="card-header">Cart</div>
    <div className="card-body">
      {cartItems.length === 0 ? (
        <p className="card-text">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-1">{item.name}</h5>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeItem(item)}
              >
                Remove
              </button>
            </div>
            <p className="card-text mb-1">Amount: {item.quantity}</p>
            <div className="d-flex justify-content-start">
              <button
                className="btn btn-sm btn-outline-light me-2"
                onClick={() => removeFromCart(item)}
              >
                -
              </button>
              <button
                className="btn btn-sm btn-outline-light"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
            <hr />
          </div>
        ))
      )}
      <h5 className="card-title">
        Total price: 
        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h5>
    </div>
  </div>
);

export default Cart;
