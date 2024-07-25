import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/SchoolLogo.png";

function NavBar() {
  return (
    <nav className="absolute z-10 fixed flex flex-row justify-between items-center w-full px-[10%] py-3 text-[#000000] bg-[#ffffff]">
      <NavLink
        to="/"
        className="duration-500 hover:bg-[#d3d3d3]/[0.4] px-2 py-1 rounded-2xl"
      >
        <div className="size-16">
          <img src={logo} alt="SchoolLogo" />
        </div>
      </NavLink>
      <div className="flex flex-row gap-2">
        <NavLink
          to="/about"
          className="duration-500 hover:bg-[#d3d3d3]/[0.2] px-6 py-2 rounded-2xl"
        >
          <div>About Us</div>
        </NavLink>
        <NavLink
          to="/about"
          className="duration-500 hover:bg-[#d3d3d3]/[0.2] px-6 py-2 rounded-2xl"
        >
          <div>Academics</div>
        </NavLink>
        <NavLink
          to="/about"
          className="duration-500 hover:bg-[#d3d3d3]/[0.2] px-6 py-2 rounded-2xl"
        >
          <div>Admissions</div>
        </NavLink>
        <NavLink
          to="/about"
          className="duration-500 hover:bg-[#d3d3d3]/[0.2] px-6 py-2 rounded-2xl"
        >
          <div>Faculty</div>
        </NavLink>
        <NavLink
          to="/about"
          className="duration-500 hover:bg-[#d3d3d3]/[0.2] px-6 py-2 rounded-2xl"
        >
          <div>Students</div>
        </NavLink>
        <NavLink
          to="/about"
          className="duration-500 hover:bg-[#d3d3d3]/[0.2] px-6 py-2 rounded-2xl"
        >
          <div>Gallery</div>
        </NavLink>
        <NavLink
          to="/about"
          className="duration-500 hover:bg-[#d3d3d3]/[0.2] px-6 py-2 rounded-2xl"
        >
          <div>Contact Us</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
