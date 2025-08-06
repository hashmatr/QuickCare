import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Profile_pic from "../assets/assets_frontend/profile_pic.png";
import Dropdown from "../assets/assets_frontend/dropdown_icon.svg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState(true); // Set to true for testing

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ALL DOCTORS", path: "/doctors"},
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm py-2">
      <div className="flex items-center justify-between px-2">
        {/* Logo */}
        <div onClick={() => navigate("/")} className=" cursor-pointer flex items-center gap-3">
          <div className="bg-indigo-500 p-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2L2 7v6c0 5.5 4.5 10 10 10s10-4.5 10-10V7l-10-5z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-[#000B6D]">QuickCare</h1>
        </div>

        {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-12 text-sm font-semibold text-gray-900">
  {navItems.map((item) => {
    const isActive =
      item.path === "/doctors"
        ? location.pathname.startsWith("/doctors")
        : location.pathname === item.path;

    return (
      <li key={item.name} className="relative">
        <Link
          to={item.path}
          className={`cursor-pointer transition duration-150 ${
            isActive ? "text-indigo-600" : "hover:text-indigo-500"
          }`}
        >
          {item.name}
        </Link>

        {isActive && (
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-indigo-500 rounded-full" />
        )}
      </li>
    );
  })}
</ul>


{token ? (
  <div className="relative group inline-block">
    {/* Profile and Dropdown Icon */}
    <div
      className="flex items-center gap-2 rounded-full py-1.5 hover:bg-gray-100 transition cursor-pointer"
    >
      <img
        src={Profile_pic}
        alt="Profile"
        className="w-9 h-9 rounded-full border-2 border-indigo-500 shadow-sm"
      />
      <img src={Dropdown} alt="Open menu" className="w-4 h-4" />
    </div>

    {/* Dropdown Menu - visible on hover */}
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <p
        onClick={() => navigate("/my-profile")}
        className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
      >
        My Profile
      </p>
      <p
        onClick={() => navigate("/my-appointments")}
        className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
      >
        My Appointments
      </p>
      <p
        onClick={() => {
          setToken(false);
        }}
        className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
      >
        Logout
      </p>
    </div>
  </div>
)

       : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-600 transition cursor-pointer"
          >
            Create account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
