import React, { useState } from 'react';

const InputForm = ({ addProduct, updateProduct, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateProduct(formData);
    } else {
      addProduct(formData);
    }
    //TODO: deshabilitar el formulari per a que no és modifiqui
  };

  return (
    <form onSubmit={handleSubmit}>
      <p><label>
        Name:
        <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />
      </label></p>
      <p><label>
        Quantity:
        <input type="number" name="quantity" required value={formData.quantity} onChange={handleInputChange} />
      </label></p>
      <p><label>
        Price:
        <input type="number" name="price" required value={formData.price} onChange={handleInputChange} />
      </label></p>
      <p><label>
        Image:
        <input type="text" name="image" value={formData.image} onChange={handleInputChange} />
      </label></p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;