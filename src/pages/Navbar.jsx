import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="https://adamiverson.github.io/">Resume</Link>
        <Link href="http://www.adamiversonphotography.com/">Photography</Link>
        <Link href="https://www.mcsweeneys.net/articles/things-my-girlfriend-did-not-say-after-i-told-her-that-i-sometimes-feel-stuck">Author</Link>
    </div>
  )
}

export default Navbar;