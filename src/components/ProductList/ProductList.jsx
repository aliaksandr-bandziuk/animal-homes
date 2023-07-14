import React from 'react';
import styles from './ProductList.module.scss';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.length > 0 && (
        <div className={styles.gridContainer}>
          <div className={styles.gridHeader}>
            <div className={styles.gridHeaderItem}>Type</div>
            <div className={styles.gridHeaderItem}>Animal</div>
            <div className={styles.gridHeaderItem}>Product</div>
            <div className={styles.gridHeaderItem}>Price</div>
          </div>
          {products.map((product, index) => (
            <div className={styles.gridRow} key={index}>
              <div className={styles.gridCell}>{product.selectedProduct}</div>
              <div className={styles.gridCell}>{product.selectedCustomer}</div>
              <div className={styles.gridCell}>{product.productName}</div>
              <div className={styles.gridCell}>{product.price} PLN</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
