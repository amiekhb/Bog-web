import React from "react";
import Header from "../header/header";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;