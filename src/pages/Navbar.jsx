import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="https://adamiverson.github.io/">Resume</Link>
        <Link href="http://www.adamiversonphotography.com/">Photography</Link>
        <Link href="/Author">publications</Link>
        <Link href="/Developer">Developer Projects</Link>
    </div>
  )
}

export default Navbar;