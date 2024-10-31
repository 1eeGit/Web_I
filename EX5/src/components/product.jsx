import React from 'react';

const Product = ({ product, addToCart }) => (
  <div className="col-md-4 mb-3">
    <div className="card border-primary" style={{ maxWidth: '18rem' }}>
      <div className="card-header">{product.name}</div>
      <div className="card-body text-primary">
        <h5 className="card-title">Price: {product.price}</h5>
        <p className="card-text">50% discount</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default Product;
