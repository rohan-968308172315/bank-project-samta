import React from 'react'
import './Contact.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {


    return (
        <>
            <div className='container-fluid pb-5 bg-light'>
                <div className='row contact_us'>
                    <div className='col-md-9'></div>
                    <div className='col-md-3 contact_us_part1'>
                        <h1>Head Office</h1>
                        <p className='text-success'>
                            <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
                            <NavLink className="nav_links" >  Contact Us <FaAngleRight /></NavLink>
                            Head Office</p>
                    </div>
                </div>
            </div>



            <div className='container-fluid p-3'>
                <div className='row'>
                    <div className='col-md-1 '>
                        <h1 className='text-primary'><IoPhonePortraitOutline /></h1>
                    </div>
                    <div className='col-md-3'>
                        <h4>TOLL-FREE NUMBER</h4>
                        <h6>7722010222</h6>
                    </div>

                    <div className='col-md-1 '>
                        <h1 className='text-primary'><MdOutlineEmail /></h1>
                    </div>
                    <div className='col-md-3'>
                        <h4>TOLL-FREE NUMBER</h4>
                        <h6>7722010222</h6>
                    </div>


                    <div className='col-md-1 '>
                        <h1 className='text-primary'><IoLocationOutline /></h1>
                    </div>
                    <div className='col-md-3'>
                        <h4>REACH US
                        </h4>
                        <h6> Samata Marg, kopargaon Dist-AhmedNagar 423601</h6>
                    </div>
                </div>
            </div>

            <hr />

            <div className='container mb-5 mt-5 contact_us3'>
                <div className='row'>
                    <div className='col-md-7'>
                        <form>
                            <div className='row'>
                                <div className='mb-4 col-md-6'>
                                    <input type='text' placeholder='Full Name' className='form-control p-2' />
                                </div>
                                <div className='mb-4 col-md-6'>
                                    <input type='text' placeholder='Phone Number' className='form-control p-2' />
                                </div>
                                <div className='mb-4 col-md-12'>
                                    <input type='email' placeholder='Email address' className='form-control p-2' />
                                </div>
                                <div className='mb-4 col-md-12'>
                                    <textarea placeholder='Write Message' className='form-control p-2' style={{ height: '200px' }} />
                                </div>
                                <div className='col-md-12'>
                                    <button className='send_message'>SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-5'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1875.9542406746166!2d74.479518!3d19.886086000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4466dd0d8f37%3A0x3b5a241263bc5536!2sSAMATA%20PATASANSTHA!5e0!3m2!1sen!2sin!4v1726409574801!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Contact;
