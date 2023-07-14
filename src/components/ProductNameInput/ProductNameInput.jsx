import React, { useState } from 'react';
import styles from './ProductNameInput.module.scss';

const ProductNameInput = ({ onEnterProductName, productName }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleProductNameChange = (event) => {
    const enteredProductName = event.target.value;
    onEnterProductName(enteredProductName);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.productNameInput}>
      <label
        htmlFor="productNameInput"
        className={`${styles.label} ${isFocused || productName ? styles.labelActive : ''}`}
      >
        Name of house
      </label>
      <input
        type="text"
        id="productNameInput"
        value={productName}
        onChange={handleProductNameChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={styles.input}
      />
    </div>
  );
};

export default ProductNameInput;
