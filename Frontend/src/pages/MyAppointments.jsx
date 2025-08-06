import React from 'react'
import { AppContext } from '../Context/AppContext'
import { useContext } from 'react'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className="p-6 mt-17">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">My Appointments</h1>
      
      <div className="space-y-4">
        {doctors.slice(0,3).map((doctor,index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-36  h-36 rounded-lg overflow-hidden flex-shrink-0">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover"/>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{doctor.speciality}</p>
                
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Address:</p>
                  <p>{doctor.address.line1}</p>
                  <p>{doctor.address.line2}</p>
                </div>
                
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Date & Time: </span>
                  <span>25, July, 2024 | 8:30 PM</span>
                </p>
              </div>
            </div>
              <div className='flex flex-col gap-2 items-center space-x-2'>
                  <button className=" text-gray-500 px-12 py-2 rounded text-sm font-medium border cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                    Pay Online
                  </button>
                  <button className=" text-gray-500 px-12 py-2 rounded text-sm font-medium border hover:bg-blue-600 hover:text-white transition-colors cursor-pointer ">
                  Reshedule
                  </button>
                  <button className="border border-gray-500 text-gray-500 px-4 py-2 rounded text-sm font-medium mr-2 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                    Cancel appointment
                  </button>
              </div>
          </div>
        ))} 
            
            </div>
          </div>
        )}

export default MyAppointments;