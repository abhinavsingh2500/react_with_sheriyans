import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.hedr}>
      this is a header component
      <button className={styles.butt}>Click Me not</button>
    </div>
  )
}

export default Header
