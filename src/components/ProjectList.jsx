import React from "react";
import Link from "next/link";

const ProjectList = () => {
  return (
    <ul>
      <li>
        <h1>Solcana Fitness</h1>
        <Link href="https://github.com/AdamIverson/solcanaThree">Link to Repo</Link>
      </li>
      <li>
        <p>Pet-Jet</p>
        <Link href="https://github.com/petjetprivate/pet-jet">Link to Repo</Link>
      </li>
      <li>
        <p>hatclub</p>
        <Link href="https://github.com/AdamIverson/Hatclub-The-Premier-Hat-Appreciation-App">Link to Repo</Link>
      </li>
    </ul>
  )
}

export default ProjectList;