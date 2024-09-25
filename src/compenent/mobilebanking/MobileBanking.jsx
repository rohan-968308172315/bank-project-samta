import React from 'react'
import './MobileBanking.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";

const MobileBanking = () => {
    return (
        <>
            <div className='container-fluid pb-5 bg-light'>
                <div className='row personal_loan'>
                    <div className='col-md-9'></div>
                    <div className='col-md-3 personal_loan_part1'>
                        <h1>Mobile Banking</h1>
                        <p className='text-success'>
                            <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
                            <NavLink className="nav_links" >  Loan <FaAngleRight /></NavLink>
                            Mobile Banking</p>
                    </div>
                </div>
            </div>




            <div className='container-fluid bg-light pb-5'>
                <div className='row mobile_banking'>
                    <div className='col-md-9'>
                        <div className='card card-body'>
                            <h3 style={{ fontFamily: 'Times New Roman, Times, serif', color: 'rgb(50, 31, 119)' }}>Mobile Banking</h3>
                            <p>Many consumers today own a smart phone. Consumers download and use many applications on smart phones. Now Samata customers can download the Samata application from Google Play Store on their smart phone and perform many tasks like depositing amount to their account, RTGS, NEFT, account checking, statement download from the phone.</p>
                        </div>
                        <hr/>

                        <div className='row'>
                            <div className='col-md-12 mt-3'>
                                <h3 className='text-center'>Steps to download & use our app</h3>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <div className='card card-body p-0'>
                                    <h5 className='px-3 pt-2' style={{color:'rgb(41, 41, 156)'}}>Step 1</h5>
                                    <p  className='px-3 pt-2'>Download samata mobile banking application from play store</p>
                                    <img src='https://www.samatapat.com/admin/uploads/mobilebankingpage/step1654dcceda1a63.jpg' />
                                </div>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <div className='card card-body p-0'>
                                    <h5 className='px-3 pt-2' style={{color:'rgb(41, 41, 156)'}}>Step 1</h5>
                                    <p  className='px-3 pt-2'>Download samata mobile banking application from play store</p>
                                    <img src='https://www.samatapat.com/admin/uploads/mobilebankingpage/step2654dcceda1f44.jpg' />
                                </div>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <div className='card card-body p-0'>
                                    <h5 className='px-3 pt-2' style={{color:'rgb(41, 41, 156)'}}>Step 1</h5>
                                    <p  className='px-3 pt-2'>Download samata mobile banking application from play store</p>
                                    <img src='https://www.samatapat.com/admin/uploads/mobilebankingpage/step3654dcceda222f.jpg' />
                                </div>
                            </div>
                            <div className='col-md-3 mt-3'>
                                <div className='card card-body p-0'>
                                    <h5 className='px-3 pt-2' style={{color:'rgb(41, 41, 156)'}}>Step 1</h5>
                                    <p  className='px-3 pt-2'>Download samata mobile banking application from play store</p>
                                    <img src='https://www.samatapat.com/admin/uploads/mobilebankingpage/step4654dcceda2427.jpg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 term_deposite_head2'>
                        <h5>Our Services</h5>
                        <hr />
                        <ul type="none" className='p-0'>
                            <li>
                                <NavLink className="nav_links">Mobile Banking</NavLink>
                            </li>
                            <li><NavLink className="nav_links">Money Transfer</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav_links">Locker</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav_links">Micro ATM</NavLink>
                            </li>
                            <li><NavLink className="nav_links">Paper Less Banking</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='cocontainer-fluid term_deposit3'>
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

export default MobileBanking;
