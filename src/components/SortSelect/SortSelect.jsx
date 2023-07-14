import React from 'react'

import styles from './SortSelect.module.scss'

const SortSelect = ({ sortDirection, handleSortDirectionChange }) => {
  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} id="sortDirection" value={sortDirection} onChange={handleSortDirectionChange}>
        <option value="">Sort by:</option>
        <option value="desc">Increase</option>
        <option value="asc">Decrease</option>
      </select>
    </div>
  )
}

export default SortSelect