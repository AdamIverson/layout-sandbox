import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from 'next/image';

export default function Card({ project }) {

  return (
    <li>
      <ul>
        <li>{project.title}</li>
        <li>{project.tech}</li>
        <Link href={project.url}>Link to Repo</Link>
        <Image src={project.image} height={1200} width={800} alt="image"></Image>
      </ul >
    </li>
  )
}