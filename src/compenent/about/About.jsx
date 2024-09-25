import React from 'react'
import './About.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";


const About = () => {
  return (
    <>
      <div className='container-fluid pb-5 bg-light'>
        <div className='row about1'>
          <div className='col-md-9'></div>
          <div className='col-md-3 about_part1'>
            <h1>Our Vision</h1>
            <p className='text-success'>
              <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
              <NavLink className="nav_links" to={'/about'}>  About Us <FaAngleRight /></NavLink>
              Our Vision</p>
          </div>
        </div>
      </div>

      <div className='container-fluid p-5 mt-5 mb-5 '>
        <div className='row'>
          <div className='col-md-5'>
            <img src='https://www.samatapat.com/admin/uploads/ourvisionpage/vision654a1eb0cfa62.png' className='w-100' />
          </div>
          <div className='col-md-7'>
            <img src='https://www.samatapat.com/admin/uploads/ourvisionpage/vision-banner654a1eb0cfe65.jpg' className='w-100' />
          </div>
        </div>
      </div>

      <div className='cocontainer-fluid about2'>
        <button> Chairman Message  </button>
        <button> Board of Director</button>
        <button> Our Vision</button>
        <button> Our Value</button>
        <button> Financial Position</button>
        <button> Our Team</button>
        <button> Our Partners</button>
        <button> Our Venture</button>
        <button> News & Updates</button>
      </div>
    </>
  )
}

export default About
