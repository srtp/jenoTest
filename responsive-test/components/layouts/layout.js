import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

function layout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
