import React, { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";
import projectData from "@/data/projectData";

const Developer = () => {
  const [projectState, setProjectState] = useState();
  
  useEffect(() => {
    setProjectState(projectData);
  }, [projectState]);

  return (
    <div>
      <h1>Developer Projects</h1>
      <ProjectList project={projectState} />
    </div>
  )
}

export default Developer;