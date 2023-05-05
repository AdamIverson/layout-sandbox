import React from 'react'
import Card from './Card'
import styles from '@/styles/Test.module.css'

const Test = ({ page }) => {

  return (
    <div className={styles.test}>
      <Card topic={page}/>
    </div>
  )
}
  
export default Test