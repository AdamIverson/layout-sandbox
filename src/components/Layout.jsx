import React from "react";
import Header from "@/pages/Header";
import Navbar from "@/pages/Navbar";
import Footer from "@/pages/Footer";
import styles from "./layout.module.css"
  
const Layout = ({ children }) => {
  return (
    <>
    <div className={styles.containerd}>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
    </>
  );
};
  
export default Layout;