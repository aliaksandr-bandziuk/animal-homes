import React from 'react';

import styles from './CustomerSelect.module.scss';

const CustomerSelect = ({ selectedProduct, onSelectCustomer, selectedCustomer }) => {
  const handleCustomerChange = (event) => {
    const selectedCustomer = event.target.value;
    onSelectCustomer(selectedCustomer);
  };

  const customersByProduct = {
    Ground: ['Dog', 'Cat', 'Giraffe', 'Elephant', 'Panda'],
    Tree: ['Squirrel', 'Orangutan', 'Koala', 'Woodpecker', 'Spider monkey'],
  };

  const customerOptions = customersByProduct[selectedProduct] || [];

  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} id="customerSelect" value={selectedCustomer} onChange={handleCustomerChange}>
        <option value="">Choose the animal</option>
        {customerOptions.map((customer) => (
          <option key={customer} value={customer}>
            {customer}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomerSelect;
