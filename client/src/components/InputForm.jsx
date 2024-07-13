import React, { useState } from 'react';

const InputForm = ({ addUser, updateUser, initialData }) => {
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
      updateUser(formData);
    } else {
      addUser(formData);
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
        <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
      </label></p>
      <p><label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
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