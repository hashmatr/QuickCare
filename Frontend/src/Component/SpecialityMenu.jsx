import React from 'react'
import {specialityData} from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';
const SpecialityMenu = () => {
  return (

<div id="speciality" className="py-12 px-4 md:px-8 lg:px-16 bg-white">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
    Find by Speciality
  </h1>

  <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
    Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
  </p>

  <div className="flex justify-center">
    {specialityData.map((item, index) => (
      <Link
        onClick={() => scroll(0,0)}
        key={index}
        to={`/doctors/${item.speciality}`}
        className=" rounded-xl  transform hover:-translate-y-2 transition-transform duration-150 ease-out flex flex-col items-center p-4 text-center"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-30 h-30 object-contain mb-3"
        />
        <p className="text-gray-700 font-medium">{item.speciality}</p>
      </Link>
    ))}
  </div>
</div>
  )
}
 
export default SpecialityMenu