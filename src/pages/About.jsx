import React from "react";
import Card from "./Card";
import styles from './About.module.css'

const About = () => {
  return(
    <div className={styles.pagetitle}>
      <h1>aboot</h1>
      <Card topic='Aboot' />
      <p>i have done a little of everything and i have every intention of continuing that behaviour</p>
    </div>
  )
}

export default About;