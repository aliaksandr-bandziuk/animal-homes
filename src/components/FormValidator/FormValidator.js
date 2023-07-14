import React from 'react';

import ButtonAdd from '../ButtonAdd/ButtonAdd';

const FormValidator = ({ productName, price, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (productName.trim() === '' || price.trim() === '') {
      alert('Please fill in all fields');
    } else if (!/^[\w\sа-яА-ЯёЁ]{3,}$/.test(productName)) {
      alert('Please enter a valid product name (letters only, minimum 3 characters)');
    } else if (isNaN(price) || +price <= 0) {
      alert('Please enter a valid price (a number greater than zero)');
    } else {
      onSubmit();
    }
  };

  return (
    <div>
      <ButtonAdd title="Add" handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormValidator;
