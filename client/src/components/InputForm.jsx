import React, { useState } from 'react';

const InputForm = ({ addProduct, updateProduct, initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const [formDisabled, setFormDisabled] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormDisabled(true);
    if (formData.id) {
      await updateProduct(formData);
    } else {
      await addProduct(formData);
    }
    setFormDisabled(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={formDisabled}>
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
      </fieldset>    
    </form>
  );
};

export default InputForm;