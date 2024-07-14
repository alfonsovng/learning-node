import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';
import Config from "./config.json";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from API
  const fetchProducts = async () => {
    console.log("fetchProducts!!")
    try {
      const response = await fetch(Config.SERVER_URL + 'products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Create a new product
  const addProduct = async (productData) => {
    try {
      const response = await fetch(Config.SERVER_URL + 'products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      setProducts([...products, data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Update an existing product
  const updateProduct = async (productData) => {
    try {
      const response = await fetch(Config.SERVER_URL + `products/${productData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      const updatedProduct = await response.json();
      const updatedProducts = products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Delete a product
  const deleteProduct = async (productId) => {
    try {
      await fetch(Config.SERVER_URL + `products/${productId}`, {
        method: 'DELETE',
      });
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <InputForm addProduct={addProduct} initialData={{ name: '', quantity: '', price: '', image: ''}} />
      <ProductList products={products} viewProduct={setSelectedProduct} editProduct={setSelectedProduct} deleteProduct={deleteProduct} />
      {selectedProduct ? (
        <div>
          <ProductDetail product={selectedProduct} />
          <ProductEdit product={selectedProduct} updateProduct={updateProduct} />
        </div>
      ) : null}
    </div>
  );
}

export default App;