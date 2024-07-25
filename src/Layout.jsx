import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./baseComponents/NavBar";
import Footer from "./baseComponents/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <Footer />
      <Outlet />
    </>
  );
}

export default Layout;
