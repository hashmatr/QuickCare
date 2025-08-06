import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { useEffect } from 'react';
import RelatedDoctors from '../Component/RelatedDoctors';
const Appointment = () => {
  const { docId } = useParams();
  const { doctors,currencySymbol } = React.useContext(AppContext);
  const [docInfo, setDocInfo] = React.useState(null);
  const [docSlots, setDocSlots] = React.useState([]);
  const [slotIndex, setSlotIndex] = React.useState(0);
  const [slotTime, setSlotTime] = React.useState('');
  const daysofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  const fetchDoctorInfo = async() => {
    const doctor = doctors.find(doc => doc._id === docId);
    setDocInfo(doctor);
  }  
  const getAvailableSlots = async() => { 
    setDocSlots([]);
    let today = new Date();
    for(let i = 0; i < 7; i++) {
      let date = new Date(today);
      date.setDate(today.getDate() + i);
      let endTime = new Date();
        endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0); // Set end time to 9 PM
      if(today.getDay() === date.getDate()) {
        date.setHours(date.getHours()>10? date.getHours()+1:10);
        date.setMinutes(date.getMinutes()>30 ? 30:0);
      }
      else {
        date.setHours(10); // Set start time to 10 AM
        date.setMinutes(0);
       } // Set start time to 0 minutes
        let timeSlots = []
        while(date<endTime){
          let formattedtime = date.toLocaleString([],{hour: '2-digit', minute: '2-digit'});
          timeSlots.push({
            datetime: new Date(date),
            time: formattedtime
        });
        date.setMinutes(date.getMinutes() + 30);} // Increment by 30 minutes
        setDocSlots(prev=> ([...prev,timeSlots]));
      
   }}


  useEffect(() => {
    fetchDoctorInfo();
  }, [docId, doctors]);
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

   const bookAppointment = () => {
    if (!slotTime) {
      alert('Please select a time slot');
      return;
    }
    alert(`Appointment booked with ${docInfo?.name} on ${slotTime}`);
  };

  if (!docInfo) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  return docInfo&&(
     <div
     onLoad={()=> scrollTo(0,0)}
      className="max-w-6xl mx-auto p-4">
        {/* Doctor Profile Section */}
        <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg p-6 shadow-sm border mb-8">
          <div className="bg-[#5F6FFF] rounded-xl flex-shrink-0">
            <img 
              src={docInfo.image} 
              alt={docInfo.name}
              className="w-70 h-79  bg-primary rounded-lg object-cover"
            />
          </div>
          
          <div className="flex-1 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-semibold text-gray-900">{docInfo.name}</h1>
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <span>{docInfo.degree} - {docInfo.speciality}</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-sm">{docInfo.experience}</span>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-2">About</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {docInfo.about}
              </p>
            </div>
            
            <div className="text-gray-900">
              <span className="font-medium">Appointment fee: {currencySymbol} {docInfo.fees}</span>
            </div>
          </div>
        </div>

        {/* Booking Slots Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Booking slots</h2>
          
          {/* Date Selection */}
          <div className="flex w-full gap-2 mb-6 overflow-x-auto">
            {docSlots.length > 0 && docSlots.map((item, index) => {
              const date = new Date();
              date.setDate(date.getDate() + index);
              const dayName = item[0]&&daysofweek[item[0].datetime.getDay()];
              const dayNum = item[0]&&item[0].datetime.getDate();
              
              return (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`flex flex-col items-center p-3 rounded-full min-w-16 cursor-pointer transition-colors
                    ${slotIndex === index 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <span className="text-sm font-medium">{dayName}</span>
                  <span className="text-lg font-bold">{dayNum}</span>
                </div>
              );
            })}
          </div>
          
          {/* Time Slots */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 mb-6">
            {docSlots.length > 0 && docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
              <button
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`p-2 text-sm rounded-lg border transition-colors
                  ${slotTime === item.time
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-500 hover:text-blue-500'
                  }`}
              >
                {item.time}
              </button>
            ))}
          </div>
          
          {/* Book Appointment Button */}
          <button 
            onClick={bookAppointment}
            className="w-[244px] bg-blue-500 text-white py-3 px-6 rounded-4xl font-medium hover:bg-blue-600 transition-colors"
          >
            Book an appointment
          </button>
        </div>

       <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    
            
  )
}

export default Appointment