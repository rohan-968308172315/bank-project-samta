import React from 'react'
import './Notice.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Notice = () => {


    return (
        <>
            <div className='container-fluid pb-5 bg-light'>
                <div className='row contact_us'>
                    <div className='col-md-9'></div>
                    <div className='col-md-3 contact_us_part1'>
                        <h1>Notice</h1>
                        <p className='text-success'>
                            <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
                            Notice</p>
                    </div>
                </div>
            </div>



            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-12'>
                        <img src='https://www.samatapat.com/admin/uploads/noticepage/sp669bba5cdb97f.jpg' className='w-100' />
                    </div>
                </div>
            </div>

            


            <div className='container-fluid term_deposit3'>
                <h1 className='text-white '>Important Links</h1>
                <div className='term_deposit4'>
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
            </div>
        </>
    )
}

export default Notice;
