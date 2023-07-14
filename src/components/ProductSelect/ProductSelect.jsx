'use client'
import React from 'react';

import styles from './ProductSelect.module.scss';

const ProductSelect = ({ onSelectProduct, selectedProduct }) => {
  const handleProductChange = (event) => {
    const selectedProduct = event.target.value;
    onSelectProduct(selectedProduct);
  };

  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} id="productSelect" value={selectedProduct} onChange={handleProductChange}>
        <option value="">Choose the type of house</option>
        <option value="Ground">Ground</option>
        <option value="Tree">Tree</option>
      </select>
    </div>
  );
};

export default ProductSelect;
