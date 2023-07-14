import React from 'react';

import CurrencySelect from '../CurrencySelect/CurrencySelect';

import styles from './ProductList.module.scss';

const ProductList = ({ products, currency, handleCurrencyChange }) => {
  const convertCurrency = (price, targetCurrency) => {
    if (targetCurrency === 'USD') {
      return (price * 0.25).toFixed(2);
    } else if (targetCurrency === 'EUR') {
      return (price * 0.22).toFixed(2);
    }
    return price.toFixed(2);
  };

  return (
    <div>
      {products.length > 0 && (
        <div className={styles.gridContainer}>
          <div className={styles.gridHeader}>
            <div className={styles.gridHeaderItem}>Type</div>
            <div className={styles.gridHeaderItem}>Animal</div>
            <div className={styles.gridHeaderItem}>Product</div>
            <div className={styles.gridHeaderItem}>Price (
              <CurrencySelect currency={currency} handleCurrencyChange={handleCurrencyChange} />
              )
            </div>
          </div>
          {products.map((product, index) => (
            <div className={styles.gridRow} key={index}>
              <div className={styles.gridCell}>{product.selectedProduct}</div>
              <div className={styles.gridCell}>{product.selectedCustomer}</div>
              <div className={styles.gridCell}>{product.productName}</div>
              <div className={styles.gridCell}>
                {convertCurrency(product.price, currency)} {currency}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
