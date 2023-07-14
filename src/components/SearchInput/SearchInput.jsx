import React, { useState } from 'react'

import styles from './SearchInput.module.scss'

const SearchInput = ({ searchQuery, handleSearchChange }) => {

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.searchInput}>
      <label
        htmlFor="searchQuery"
        className={`${styles.label} ${isFocused || searchQuery ? styles.labelActive : ''}`}
      >Search</label>
      <input
        type="text"
        id="searchQuery"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={styles.input}
      />
    </div>
  )
}

export default SearchInput