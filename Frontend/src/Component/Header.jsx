import React from "react";
import ArrowIcon from "../assets/assets_frontend/arrow_icon.svg";
import Groupprofile from "../assets/assets_frontend/group_profiles.png";
import headerimage from "../assets/assets_frontend/header_img.png";
const DoctorHeader = () => {
  return (
    <section className="w-full mt-6 h-[520px] bg-[#4C5DF1] text-white flex items-center justify-center rounded-xl ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 ml-15">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl  font-semibold leading-tight">
            Book Appointment <br />
            <span className="text-white/90">With Trusted Doctors</span>
          </h1>

          {/* Profile Image + Text in One Line */}
          <div className="flex items-center gap-2 text-white/80 text-lg ">
            <img
              src={Groupprofile}
              alt="Group_profile"
              className="h-10 rounded-full"
            />
            <span>
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </span>
          </div>

          {/* Button with Icon in One Line as Anchor */}
          <a 
            href="#speciality"
            className=" w-[220px] bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition duration-300 flex items-center gap-2"
          >
            <span>Book appointment</span>
            <img src={ArrowIcon} alt="Arrowicon" className="w-5 h-5" />
          </a>
        </div>

        {/* Right Image Slot */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* You can replace this div with actual image */}
          <div className="h-[580px] w-full lg:w-[580px] bg-transparent">
            {<img src={headerimage} className="h-[629px] object-contain" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorHeader;
