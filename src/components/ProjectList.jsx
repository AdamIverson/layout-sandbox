import React from "react";
import Card from "@/pages/Card.jsx";
import projectData from '../data/projectData.jsx'

const ProjectList = () => {
  const projects = projectData.map((project) =>
    <Card project={project} />
  )
  return (
    <ul>
      {projects}
    </ul>
  )
}

export default ProjectList;