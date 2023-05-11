import React, { useState, useEffect } from "react";
import Card from "@/pages/Card.jsx";
import projectData from '../data/projectData.jsx'


const ProjectList = ({ project }) => {
  // console.log('ProjectList project:', project)
  const [projectListState, setProjectListState] = useState([])

  useEffect(() => {
    setProjectListState(projectData);
  }, [])

  const projects = projectListState.map((project) =>
    <Card project={project} key={project.title} />
  )
  return (
    <ul>
      {/* <li>ProjectList List Item</li> */}
      {projects}
    </ul>
  )
}

export default ProjectList;