import React from "react";
import Card from "./Card";
import styles from './About.module.css'

const About = () => {
  return(
    <div className={styles.pagetitle}>
      <Card topic="about" />
    </div>
  )
}

export default About;