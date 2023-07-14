import React from 'react'

import styles from './ButtonAdd.module.scss'

const ButtonAdd = ({ title, handleSubmit }) => {

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className={styles.buttonSubmit}
    >
      {title}
    </button>
  )
}

export default ButtonAdd