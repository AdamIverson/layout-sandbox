import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from ".//../styles/layout.module.css"
  
const Layout = ({ children }) => {
  return (
    <>
    <div className={styles.container}>
      <Header />
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
    </>
  );
};
  
export default Layout;