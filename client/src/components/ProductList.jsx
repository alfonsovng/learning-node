import React from 'react';

const ProductList = ({ products, viewProduct, editProduct, deleteProduct }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => viewProduct(product)}>View</button>
            <button onClick={() => editProduct(product)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;