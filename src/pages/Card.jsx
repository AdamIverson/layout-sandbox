import React from 'react'
import Link from "next/link";

export default function Card({ project }) {
  return (
     <li>
      <ul>
        <li>{project.title}</li>
        <li>{project.tech}</li>
        <Link href={project.url}>Link to Repo</Link>
      </ul >
    </li>
  )
}