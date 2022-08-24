import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Slider/> 
   <Products/>
   {/* <Footer/> */}
  {/*
    <Categories/>
    <Newsletter/>
    <Footer/>
  */}
    </div>
  )
}

export default Home