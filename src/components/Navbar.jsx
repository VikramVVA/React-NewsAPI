import React, { useState } from "react";
import imagelogo from "../assets/images/news-logo.png";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const NavLinks = () => {
  return (
    <>
      <NavLink className="mx-2 text-white text-lg hover:text-blue-400" to="/home">
        Genaral
      </NavLink>
      <NavLink className="mx-2 text-white text-lg hover:text-blue-400" to="/health">
        Health
      </NavLink>
      <NavLink className="mx-2 text-white text-lg hover:text-blue-400" to="/sports">
        Sports
      </NavLink>
      <NavLink className="mx-2 text-white text-lg hover:text-blue-400" to="/entertainment">
        Entertainment
      </NavLink>
      <NavLink className="mx-2 text-white text-lg hover:text-blue-400" to="/science">
        Science 
      </NavLink>
    </>
  );
};

const Userprofile = () =>{
  return(
    <>
      <div className="absolute right-16 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
      <a
        href="/profile"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        View Profile
      </a>
      {/* <a
        href="/account"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Account Settings
      </a> */}
      <a
        href="/logout"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Logout
      </a>
    </div>
    </>
  )
}

export default function Navbar() {
  const [isProfileClicked,setIsProfileClicked] = useState(false)
  const toggleProfile = () =>{
    setIsProfileClicked(!isProfileClicked)
  }
  return (
    <>
      <header className="flex bg-black sticky top-0 z-[20] mx-auto w-full items-center justify-between shadow-lg">
        <div className="py-2">
          <img src={imagelogo} alt="" className="ml-8 w-20 h-20 bg-white" />
        </div>
        <div className="flex justify-center p-4 m-2 ">
          <ul className="flex">
            <NavLinks />
          </ul>
        </div>
        <div className="lg:flex lg:justify-center lg:p-4 lg:m-2 md:flex md:justify-center md:p-4 md:m-2 sm:hidden cursor-pointer">
          <div className="flex bg-white p-4 rounded-3xl"  onClick={toggleProfile}>
            <FaUser />
          </div>
          {isProfileClicked && <Userprofile/>}
        </div>
      </header>
    </>
  );
}
