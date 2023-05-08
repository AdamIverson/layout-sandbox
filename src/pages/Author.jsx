import React from "react";
import Link from "next/link";

const Author = () => {
  return (
    <div>
      <h1>Author page</h1>
      <ul>
        <li>
          <h2>Don't Fall In Love With The City</h2>
          <p>collaboration of joe bozic's poetry and adam iverson's photography</p>
        </li>
        <li>
          <h2>gelato for dinner</h2>
          <p>shameless street photography, italy 2019</p>
        </li>
        <li>
          <Link href="https://www.mcsweeneys.net/articles/things-my-girlfriend-did-not-say-after-i-told-her-that-i-sometimes-feel-stuck">dave eggers and i are besties</Link>
        </li>
      </ul>
    </div>
  )
}

export default Author;