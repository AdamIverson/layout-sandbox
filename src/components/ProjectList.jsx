import React, { useState, useEffect } from "react";
import Card from "@/pages/Card.jsx";
import projectData from '../data/projectData.jsx'


const ProjectList = () => {
  const [projectListState, setProjectListState] = useState([])

  useEffect(() => {
    setProjectListState(projectData);
  }, [])

  const projects = projectListState.map((project) =>
    <Card project={project} key={project.title} />
  )
  return (
    <ul>
      {projects}
    </ul>
  )
}

export default ProjectList;