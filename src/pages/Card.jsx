import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from 'next/image';

export default function Card({ project }) {
  console.log("+*+*+*+*+*+*project:", project);
  const [test, setTest] = useState();

  useEffect(() => {
    setTest(project);
  }, [project]);

  console.log("+*+*+*+*test", test);

  if (test) {
    return (
      <li>
        <ul>
        <li>{test.title}</li>
        <li>{test.tech}</li>
        <Link href={test.url}>Link to Repo</Link>
      <Image src={test.image} height={1200} width={800} alt="image"></Image>
        {/* <li>{project.title}</li>
        <li>{project.tech}</li>
      <Link href={project.url}>Link to Repo</Link> */}
        {/* <Image src={project.image} height={1200} width={800} alt="image"></Image> */}
        </ul >
      </li>
    )
  }
  else {
    return (
      <li>placeholder</li>
    )
  }
}