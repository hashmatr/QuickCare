import React from 'react';
import Appointment from '../assets/assets_frontend/appointment_img.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[350px] flex-col-reverse md:flex-row items-center justify-between bg-[#4C5DF1] rounded-lg px-6 sm:px-10 md:px-14 py-10 my-20 md:mx-10 text-white">
      
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">Book Appointment</p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">With 100+ Trusted Doctors</p>
        </div>
        <button 
             onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
        className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition duration-300">

          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img src={Appointment} alt="Appointment_Image" className="h-[380px] mb-6 max-w-xs sm:max-w-sm md:max-w-md w-full object-contain " />
      </div>
    </div>
  );
};

export default Banner;
