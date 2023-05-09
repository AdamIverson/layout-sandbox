import React from "react";
import Link from "next/link";
import projectData from '../data/projectData.jsx'

const ProjectList = () => {
  console.log('************', projectData);
  const projects = projectData.map((project) =>
    <li>
      <ul>
        <li>{project.title}</li>
        <li>{project.tech}</li>
        <Link href={project.url}>Link to Repo</Link>
      </ul >
    </li>
  )
  return (
    <ul>
      {projects}
      {/* <li>
        <h1>Solcana Fitness</h1>
        <h2></h2>
        <h3>Tech: Expo/React Native/Firebase</h3>
        <Link href="https://github.com/AdamIverson/solcanaThree">Link to Repo</Link>
      </li>
      <li>
        <h1>Pet-Jet</h1>
        <h2></h2>
        <h3>Tech: React</h3>
        <Link href="https://github.com/petjetprivate/pet-jet">Link to Repo</Link>
      </li>
      <li>
        <h1>hatclub</h1>
        <h2></h2>
        <h3>Tech: React</h3>
        <Link href="https://github.com/AdamIverson/Hatclub-The-Premier-Hat-Appreciation-App">Link to Repo</Link>
      </li> */}
    </ul>
  )
}

export default ProjectList;