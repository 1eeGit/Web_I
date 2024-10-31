import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => (
  <div>
    <div className="row">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </div>
);

export default ProductList;
