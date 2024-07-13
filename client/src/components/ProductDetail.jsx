import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>Product Detail</h2>
      <p>Name: {product.name}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Price: {product.price}</p>
      <p>Image: {product.image}</p>
    </div>
  );
};

export default ProductDetail;