import React from 'react'
import Card from './Card'
import styles from '@/styles/Test.module.css'

const Test = () => {
  return (
    <div className={styles.test}>
      <Card topic="test"/>
    </div>
  )
}
  
export default Test;