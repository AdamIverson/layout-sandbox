import React from "react";
import styles from '../styles/About.module.css'
import Resume from "./Resume";

const About = () => {
  return(
    <div className={styles.pagetitle}>
      <h1>aboot</h1>
      <Resume />
      <p>i have done a little of everything and i have every intention of continuing that behaviour</p>
    </div>
  )
}

export default About;