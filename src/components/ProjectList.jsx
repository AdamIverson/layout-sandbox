import React from "react";
import Link from "next/link";
import projectData from '../data/projectData.jsx'

const ProjectList = () => {
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
    </ul>
  )
}

export default ProjectList;