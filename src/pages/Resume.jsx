import React from "react";
// import { Document } from "react-pdf";

const Resume = () => {
  return (
    // <a href="https://adamiverson.github.io">photo</a>
    <object
      data="https://adamiverson.github.io"
      type="application/pdf"
      height="500px"
      alt="resume pdf"
    />
  )
}
export default Resume;