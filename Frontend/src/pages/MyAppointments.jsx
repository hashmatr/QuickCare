import React from 'react'
import { AppContext } from '../Context/AppContext'
import { useContext } from 'react'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className="p-4 md:p-6 mt-8 md:mt-17">
      <h1 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">My Appointments</h1>
      
      <div className="space-y-3 md:space-y-4">
        {doctors.slice(0,3).map((doctor,index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-3 md:p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover"/>
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">{doctor.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-2">{doctor.speciality}</p>
                
                <div className="text-xs md:text-sm text-gray-600 mb-2">
                  <p className="font-medium">Address:</p>
                  <p>{doctor.address.line1}</p>
                  <p>{doctor.address.line2}</p>
                </div>
                
                <p className="text-xs md:text-sm text-gray-600">
                  <span className="font-medium">Date & Time: </span>
                  <span>25, July, 2024 | 8:30 PM</span>
                </p>
              </div>
            </div>
            
            <div className='flex flex-col gap-2 md:gap-3 w-full md:w-auto'>
              <button className="text-gray-500 px-3 md:px-6 lg:px-12 py-2 rounded text-xs md:text-sm font-medium border hover:bg-blue-600 hover:text-white transition-colors w-full md:w-auto cursor-pointer">
                Pay Online
              </button>
              <button className="text-gray-500 px-3 md:px-6 lg:px-12 py-2 rounded text-xs md:text-sm font-medium border hover:bg-blue-600 hover:text-white transition-colors w-full md:w-auto cursor-pointer">
                Reschedule
              </button>
              <button className="border border-gray-500 text-gray-500 px-3 md:px-4 py-2 rounded text-xs md:text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors w-full md:w-auto cursor-pointer">
                Cancel appointment
              </button>
            </div>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default MyAppointments