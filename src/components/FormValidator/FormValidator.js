import React from 'react';

import ButtonAdd from '../ButtonAdd/ButtonAdd';

const FormValidator = ({ productName, price, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (productName.trim() === '' || price.trim() === '') {
      alert('Пожалуйста, заполните все поля');
    } else if (!/^[\w\sа-яА-ЯёЁ]{3,}$/.test(productName)) {
      alert('Пожалуйста, введите корректное название товара (только буквы, минимум 3 символа)');
    } else if (isNaN(price) || +price <= 0) {
      alert('Пожалуйста, введите корректную цену (число больше нуля)');
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
