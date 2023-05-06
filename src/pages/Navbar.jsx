import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/test">Test</Link>
    </div>
  )
}

export default Navbar;