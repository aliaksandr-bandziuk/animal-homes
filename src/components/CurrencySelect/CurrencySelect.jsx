import React from 'react';

import styles from './CurrencySelect.module.scss';

const CurrencySelect = ({ currency, handleCurrencyChange }) => {
  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
        <option value="PLN">PLN</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default CurrencySelect;
