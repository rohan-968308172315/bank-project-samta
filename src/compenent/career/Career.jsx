import React from 'react'
import './Career.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Career = () => {


    return (
        <>
            <div className='container-fluid pb-5 bg-light'>
                <div className='row contact_us'>
                    <div className='col-md-9'></div>
                    <div className='col-md-3 contact_us_part1'>
                        <h1>Careers
                        </h1>
                        <p className='text-success'>
                            <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
                            Careers
                        </p>
                    </div>
                </div>
            </div>



            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-12 mt-4'>
                        <p className='text-center'><b>Current Opening:</b>
                            <a href='' style={{ textDecoration: 'none' }}> &nbsp;&nbsp; Click here </a> for More details</p>
                    </div>

                    <div className='col-md-12 mt-4 mb-5'>

                        <div className="progress-container">
                            <div className="step active">
                                <div className="step-number">1</div>
                                <div className="step-text">Which job role & location excites you?</div>
                            </div>
                            <div className="line"></div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <div className="step-text">Could you tell us about yourself?</div>
                            </div>
                            <div className="line"></div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <div className="step-text">How can we get in touch with you?</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 career_part2'>
                        <form>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <label>Job Position</label>
                                    <select required="" className="form-control" id="name" name="job_position" placeholder="name">
                                        <option selected>Branch Manager</option>
                                        <option>Assistant Branch Manager</option>
                                        <option>Jr. Officer</option>
                                        <option>Sr. Officer</option>
                                        <option>Jr. Officer for gold loan</option>
                                        <option>Sr. Officer for gold loan</option>
                                        <option>Cashier</option>
                                        <option>Receptionist</option>
                                        <option>Hr Manager</option>
                                        <option>Recovery Officer</option>
                                        <option>Loan Officer</option>
                                        <option>EDP Manager</option>
                                    </select>
                                    <h5 className="mb-1 title ps-1 mt-3">Job Location</h5>
                                    <hr />
                                    <div className="formItem">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" checked="checked" type="radio" name="job_type" value="branch" id="job_type" />
                                                    <label className="form-check-label" for="job_type">
                                                        Branch
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" value="gold_counter" type="radio" name="job_type" id="gold_loan_counter" />
                                                    <label className="form-check-label" for="gold_loan_counter">
                                                        Gold Loan Counter
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="formItem itemHide" id="branch">
                                        <label className="customLabel">Select Branch</label>
                                        <select required="" className="form-control" id="branch" name="branch" placeholder="branch">
                                            <option selected>Kopargaon</option>
                                            <option>Rahata</option>
                                            <option>Shirdi</option>
                                            <option>Shrirampur</option>
                                            <option>Yeola</option>
                                            <option>Pune</option>
                                            <option>Gandhi Chowk</option>
                                            <option>Nashik Road</option>
                                            <option>Premdan Chauk</option>
                                            <option>Ahmednagar</option>
                                            <option>Vaijapur</option>
                                            <option>Rahuri</option>
                                            <option>Jamkhed</option>
                                            <option>Sangamner</option>
                                            <option>Kolhar</option>
                                        </select>
                                    </div>
                                    <div className="formItem itemHide" id="gold_counter" style={{ display: "none" }}>
                                        <label className="form-control">Select Gold Loan Counter</label>
                                        <select required="" className="customSelect" id="branch" name="branch_gold_counter" placeholder="branch">
                                            <option selected>Aurangabad</option>
                                            <option>Kolpewadi</option>
                                            <option>Lasalgaon</option>
                                            <option>Newasa</option>
                                            <option>Pimpalgaon Baswant</option>
                                            <option>Surya Complex</option>
                                            <option>Lasur Station</option>
                                            <option>Gangapur</option>
                                            <option>Paithan</option>
                                            <option>Kolhar</option>
                                            <option>Manmad</option>
                                            <option>Panchavati Karanja</option>
                                            <option>Walunj Midc</option>
                                            <option>Beed</option>
                                            <option>Pundlik Nagar</option>
                                            <option>Bhavsar Chowk</option>
                                            <option>Sarafa Bazar</option>
                                            <option>Nandgaon</option>
                                            <option>Nifad</option>
                                        </select>
                                    </div>
                                    <div className="text-center mt-4 mb-5">
                                        <button className="btn btn-success" name="submit" type="submit">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </form>
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

export default Career;
