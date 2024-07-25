import React from "react";
import logo from "../assets/SchoolLogo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed z-10 bottom-0 w-full px-[10%] py-1 bg-[#ffffff] flex flex-row justify-center gap-4 items-center text-[#000000]">
      <NavLink
        to="/"
        className="duration-500 hover:bg-[#d3d3d3]/[0.2] px-2 py-1 rounded-2xl"
      >
        <div className="size-10">
          <img src={logo} alt="SchoolLogo" />
        </div>
      </NavLink>
      <p className="text-[16px]">Committed to Academic and Personal Growth.</p>
    </footer>
  );
}

export default Footer;
