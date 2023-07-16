'use client'

import React, { useState } from 'react';

import ProductSelect from '../ProductSelect/ProductSelect';
import CustomerSelect from '../CustomerSelect/CustomerSelect';
import ProductNameInput from '../ProductNameInput/ProductNameInput';
import PriceInput from '../PriceInput/PriceInput';
import FormValidator from '../FormValidator/FormValidator';
import ProductList from '../ProductList/ProductList';
import SearchInput from '../SearchInput/SearchInput';
import SortSelect from '../SortSelect/SortSelect';

import styles from './Houses.module.scss';

export const Houses = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sortEnabled, setSortEnabled] = useState(false);
  const [sortDirection, setSortDirection] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('PLN');

  const totalAddedProducts = products.length;

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedCustomer('');
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleEnterProductName = (name) => {
    setProductName(name);
  };

  const handleEnterPrice = (priceValue) => {
    setPrice(priceValue);
  };

  const handleFormSubmit = () => {
    if (productName.trim() === '' || price.trim() === '') {
      alert('Please fill all the fields');
      return;
    }

    if (isNaN(price) || +price <= 0) {
      alert('Please enter a valid price (a number greater than zero)');
      return;
    }

    const newProduct = {
      selectedProduct,
      selectedCustomer,
      productName,
      price: +price,
    };

    setProducts((prevState) => [...prevState, newProduct]);

    setSelectedProduct('');
    setSelectedCustomer('');
    setProductName('');
    setPrice('');
    setFormSubmitted(true);

    if (products.length + 1 >= 2) {
      setSortEnabled(true);
    }

    console.log('Товары:', products);
  };

  const handleResetForm = () => {
    setSelectedProduct('');
    setSelectedCustomer('');
    setProductName('');
    setPrice('');
    setFormSubmitted(false);
    setSortEnabled(false);
  };

  const handleSortDirectionChange = (event) => {
    setSortDirection(event.target.value);
    sortProducts();
  };

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const productNameLower = product.productName.toLowerCase();
    const selectedProductLower = product.selectedProduct.toLowerCase();
    const selectedCustomerLower = product.selectedCustomer.toLowerCase();
    const searchQueryLower = searchQuery.toLowerCase();

    return (
      productNameLower.includes(searchQueryLower) ||
      selectedProductLower.includes(searchQueryLower) ||
      selectedCustomerLower.includes(searchQueryLower)
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.housesWrapper}>
        <h2>Please add the houses</h2>
        <div className={styles.formWrapper}>
          <ProductSelect
            onSelectProduct={handleProductSelect}
            selectedProduct={selectedProduct}
          />
          <CustomerSelect
            selectedProduct={selectedProduct}
            onSelectCustomer={handleCustomerSelect}
            selectedCustomer={selectedCustomer}
          />
          <ProductNameInput
            onEnterProductName={handleEnterProductName}
            productName={productName}
          />
          <PriceInput
            onEnterPrice={handleEnterPrice}
            price={price}
          />
          <FormValidator
            productName={productName}
            price={price}
            onSubmit={handleFormSubmit}
          />
        </div>

        <h2>
          {totalAddedProducts > 0
            ? `You added ${totalAddedProducts} ${totalAddedProducts > 1 ? 'houses' : 'house'}`
            : 'No added houses'}
        </h2>

        <SearchInput
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />

        {sortEnabled && (
          <SortSelect
            sortDirection={sortDirection}
            handleSortDirectionChange={handleSortDirectionChange}
          />
        )}

        <ProductList
          products={filteredProducts}
          currency={currency}
          handleCurrencyChange={setCurrency} />
      </div>
    </div>
  );
};

export default Houses;
