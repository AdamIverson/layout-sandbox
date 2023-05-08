import React from "react";
import Card from "./Card";
import styles from './About.module.css'

const About = () => {
  return(
    <div className={styles.pagetitle}>
      <h1>aboot</h1>
      <Card topic='Aboot' />
      <p>ten feet tall and bulletproof</p>
    </div>
  )
}

export default About;