import React from "react";
import Header from "@/pages/Header";
import Footer from "@/pages/Folder";
  
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
  
export default Layout;