import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); //
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ALL DOCTORS', path: '/doctors' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4"> {/* ⬅️ Increased logo-text gap */}
          <div className="bg-indigo-500 p-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7v6c0 5.5 4.5 10 10 10s10-4.5 10-10V7l-10-5z" />
            </svg>
          </div>
          <h1 className="text-xl font-extrabold text-[#001B79]">QuickCare</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-12 text-sm font-semibold text-gray-900">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <Link
                to={item.path}
                className={`cursor-pointer ${location.pathname === item.path ? 'text-indigo-600' : ''}`}
              >
                {item.name}
              </Link>
              {location.pathname === item.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-indigo-500 rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/login')}
          className="hidden md:inline-block bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-600 transition cursor-pointer"
        >
          Create account
        </button>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-semibold ${
                location.pathname === item.path ? 'text-indigo-600 underline' : 'text-gray-800'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/login');
            }}
            className="w-full mt-2 bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-600 transition cursor-pointer"
          >
            Create account
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
