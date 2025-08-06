import React from 'react'
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import SpecialityMenu from '../Component/SpecialityMenu';
import TopDoctors from '../Component/TopDoctors';
const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home