import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className='container-fluid p-5 footer_part'>
        <div className='row'>
          <div className='col-md-3 footer_part1_ul'>
            <h2>Quick Links</h2>
            <ul type='none' className='p-0'>
              <li><NavLink className="foote-links">About Us</NavLink></li>
              <li><NavLink className="foote-links">Our Ventures</NavLink></li>
              <li><NavLink className="foote-links">News & Updates</NavLink></li>
              <li><NavLink className="foote-links">Contact Us</NavLink></li>
              <li><NavLink className="foote-links">Career</NavLink></li>
            </ul>
          </div>
          <div className='col-md-3 footer_part1_ul'>
            <h2>Products</h2>
            <ul type="none" className='p-0'>
              <li><NavLink className="foote-links">Savings Deposit </NavLink> </li>
              <li><NavLink className="foote-links">Fixed Deposit </NavLink> </li>
              <li><NavLink className="foote-links">Daily Deposit Scheme  </NavLink> </li>
              <li><NavLink className="foote-links">Recuring Deposit </NavLink> </li>
              <li><NavLink className="foote-links">Gold Loan  </NavLink> </li>
              <li><NavLink className="foote-links">Personal Loan  </NavLink> </li>
              <li><NavLink className="foote-links">Vehical Loan  </NavLink> </li>
            </ul>
          </div>
          <div className='col-md-3 footer_part2_ul'>
            <h2>Head Office</h2>
            <ul type="none" className='p-0'>
              <li>Samata Marg, kopargaon Dist-AhmedNagar 423601</li>
              <li>(02423) 225555.</li>
              <li>Call Center No :7722010222.</li>
            </ul>
          </div>
          <div className='col-md-3 footer_part3_ul'>
            <h2>Newsletter</h2>
            <div className="search-container">
              <input type="email" placeholder="E-mail " />
              <button type="submit"><FaArrowRight /></button>
            </div>

            <ul type="none" className='p-0 d-flex flex-wrap gap-4 mt-4'>
              <li>
                <a href=''><FaFacebookF />
                </a>
              </li>
              <li><a href=''><FaInstagram /></a> </li>
              <li><a href=''><FaTwitter /></a> </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='container-fluid bg-primary'>
        <p className='text-center text-white p-3'>© Copyright - Samatapat 2024 All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
