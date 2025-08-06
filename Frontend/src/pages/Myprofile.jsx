import { useState } from 'react';
import profilepic from '../assets/assets_frontend/profile_pic.png'; // Assuming you have a profile picture in your assets
import React from 'react';
const Myprofile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Edward Vincent',
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address1: '57th Cross, Richmond',
    address2: 'Circle, Church Road, London',
    gender: 'Male',
    birthday: '20 July, 2024'
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can add logic to save the data
    console.log('Saved data:', formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-lg bg-card rounded-lg mt-6 mb-6 relative">
      {/* Yellow badge in top right */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-profile-accent rounded-full flex items-center justify-center">
      </div>

      {/* Profile header with image and placeholder */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-35 h-35 bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src={profilepic} 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Name */}
      {isEditing ? (
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="text-xl font-semibold text-foreground mb-6 bg-transparent border-b border-muted focus:outline-none focus:border-primary w-full"
        />
      ) : (
        <h1 className="text-xl font-semibold text-foreground mb-8">{formData.name}</h1>
      )}

      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3 border-b border-border pb-1">
          CONTACT INFORMATION
        </h2>
        
        <div className="space-y-2 text-sm">
          <div className="flex">
            <span className="text-muted-foreground mb-4 w-16">Email id:</span>
            {isEditing ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="text-blue-500 bg-transparent border-b border-muted focus:outline-none focus:border-primary flex-1"
              />
            ) : (
              <span className="text-blue-500">{formData.email}</span>
            )}
          </div>
          <div className="flex">
            <span className="text-muted-foreground mb-4 w-16">Phone:</span>
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="text-blue-500 bg-transparent border-b border-muted focus:outline-none focus:border-primary flex-1"
              />
            ) : (
              <span className=" mb-4 text-blue-500">{formData.phone}</span>
            )}
          </div>
          <div className="flex">
            <span className="text-muted-foreground w-16">Address:</span>
            <div className="flex flex-col flex-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={formData.address1}
                    onChange={(e) => handleInputChange('address1', e.target.value)}
                    className="text-foreground bg-transparent border-b border-muted focus:outline-none focus:border-primary "
                  />
                  <input
                    type="text"
                    value={formData.address2}
                    onChange={(e) => handleInputChange('address2', e.target.value)}
                    className="text-foreground bg-transparent border-b border-muted focus:outline-none focus:border-primary"
                  />
                </>
              ) : (
                <>
                  <span className="text-foreground">{formData.address1}</span>
                  <span className="text-foreground">{formData.address2}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
          BASIC INFORMATION
        </h2>
        
        <div className="space-y-2 text-sm">
          <div className="flex">
            <span className="text-muted-foreground w-16">Gender:</span>
            {isEditing ? (
              <select
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="text-foreground bg-transparent border-b border-muted focus:outline-none focus:border-primary"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <span className="text-foreground">{formData.gender}</span>
            )}
          </div>
          <div className="flex">
            <span className="text-muted-foreground w-16">Birthday:</span>
            {isEditing ? (
              <input
                type="text"
                value={formData.birthday}
                onChange={(e) => handleInputChange('birthday', e.target.value)}
                className="text-foreground bg-transparent border-b border-muted focus:outline-none focus:border-primary"
              />
            ) : (
              <span className="text-foreground">{formData.birthday}</span>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        {isEditing ? (
          <button 
            onClick={handleSave}
            className="px-6 py-2 border cursor-pointer hover:bg-[#5F6FFF] hover:text-white bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Save information
          </button>
        ) : (
          <>
            <button 
              onClick={handleEdit}
              className="px-6 py-2 border cursor-pointer hover:bg-[#5F6FFF] hover:text-white bg-muted text-foreground rounded-full text-sm font-medium hover:bg-muted/80 transition-colors"
            >
              Edit
            </button>
            <button className="px-6 py-2 border cursor-pointer hover:bg-[#5F6FFF] hover:text-white bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Save information
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Myprofile;

