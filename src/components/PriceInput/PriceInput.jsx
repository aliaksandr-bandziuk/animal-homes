import React, { useState } from 'react';

import styles from './PriceInput.module.scss';

const PriceInput = ({ onEnterPrice, price }) => {

  const [isFocused, setIsFocused] = useState(false);

  const handlePriceChange = (event) => {
    const enteredPrice = event.target.value;
    onEnterPrice(enteredPrice);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.priceInput}>
      <label
        htmlFor="priceInput"
        className={`${styles.label} ${isFocused || price ? styles.labelActive : ''}`}
      >Price (PLN)</label>
      <input
        type="text"
        id="priceInput"
        value={price}
        onChange={handlePriceChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={styles.input}
      />
    </div>
  );
};

export default PriceInput;
