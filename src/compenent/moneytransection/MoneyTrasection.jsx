import React from 'react'
import './MoneyTrasection.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";

const MoneyTrasection = () => {


    return (
        <>
            <div className='container-fluid pb-5 bg-light'>
                <div className='row personal_loan'>
                    <div className='col-md-9'></div>
                    <div className='col-md-3 personal_loan_part1'>
                        <h1>Money Transfer</h1>
                        <p className='text-success'>
                            <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
                            <NavLink className="nav_links" >  Services <FaAngleRight /></NavLink>
                            Money Transfer</p>
                    </div>
                </div>
            </div>




            <div className='container-fluid bg-light pb-5'>
                <div className='row mobile_banking'>
                    <div className='col-md-9'>
                        <div className='card card-body'>
                            <h3 style={{ fontFamily: 'Times New Roman, Times, serif', color: 'rgb(50, 31, 119)' }}>Money Transfer</h3>
                            <p><b>
                                The Fastest Way to Receive & Transfer Money with SAMATA PATSANSTHA. Transferring money from your SAMATA account is very simple and convenient.<br /><br />

                                There are various options provided online for transferring money.</b></p>
                            <h3 className='text-center text-success mt-4'>NEFT/RTGS/IMPS</h3>
                        </div>
                        <hr />

                        <div className='row bg-white'>
                            <div className='col-md-12 mt-3'>
                                <h3 className='text-center'>Steps to download & use our app</h3>
                            </div>


                            <div className='col-md-5 mt-3 mobile_banking_part1'>
                                <img src='https://www.samatapat.com/admin/uploads/moneytransferpage/neft-national-electronic-funds-transfer654dd5efbcd36.jpg' className='w-100' />
                            </div>
                            <div className='col-md-7 mt-3 mobile_banking_part2'>
                                <h4 style={{ color: 'rgb(50, 31, 119)' }}>NEFT</h4>
                                <p>NATIONAL ELECTRONIC FUNDS TRANSFER</p>
                                <p>Important of NEFT transaction</p>

                                <ul type="none" className='p-0'>
                                    <li>
                                        It is economical to use NEFT for money transfer.
                                    </li>
                                    <li>
                                        NEFT is built on a secure platform.
                                    </li>
                                    <li>
                                        No need of using a cheque or a demand draft (DD) for money transfer.
                                    </li>
                                    <li>
                                        Transferring money does not require you to visit the bank.
                                    </li>
                                    <li>
                                        Initiate funds transfer online.
                                    </li>
                                    <li>
                                        Customer can send and receive money on his/her account.
                                    </li>
                                    <li>
                                        The transfer can be completed faster, with convenience.
                                    </li>
                                </ul>

                            </div>

                            <div className='col-md-5 mt-3 mobile_banking_part1'>
                                <img src='https://www.samatapat.com/admin/uploads/moneytransferpage/rtgs654dd5efbcfbe.jpg' className='w-100' />
                            </div>
                            <div className='col-md-7 mt-3 mobile_banking_part2'>
                                <h4 style={{ color: 'rgb(50, 31, 119)' }}>RTGS</h4>
                                <p>REAL TIME GROSS SETTELEMENT</p>
                                <p>Importance of RTGS transaction</p>

                                <p>
                                    <b>
                                        RTGS transfer time is extremely fast when compared to NEFT. Given that transactions happen in real-time and on an individual basis, it takes less than 30 minutes for the funds to be transferred from your account to the beneficiary's account.
                                    </b>
                                </p>
                                <p>
                                    <b>
                                        An electronic payment system in which payment instructions between banks are processed and settled individually and continuously, on a real time basis, throughout the day. Available for transaction value of Rs.2.00 lac and above. Customer can send and received money on his/her account.
                                    </b>
                                </p>
                            </div>

                            <div className='col-md-5 mt-3 mobile_banking_part1'>
                                <img src='https://www.samatapat.com/admin/uploads/moneytransferpage/imps654dd5efbd230.png' className='w-100' />
                            </div>
                            <div className='col-md-7 mt-3 mobile_banking_part2'>
                                <h4 style={{ color: 'rgb(50, 31, 119)' }}>IMPS</h4>
                                <p>IMMEDIATE PAYMENT SERVICE</p>
                                <p>Important of IMPS transaction</p>

                                <p>
                                    <b>
                                        SAMATA offers IMPS an inter-bank electronic fund transfer service through mobile phones. The service is available 24x7 throughout the year including bank holidays.Funds are transferred on real time basis without any delay.
                                    </b>
                                </p>
                                <p>
                                    <b>
                                        It is being extended by Samata Patsanstha through various channels such as ATM, Internet Banking, and Mobile Banking etc. All the Public sector & major Private Banks are participating in IMPS.Available for transaction value of up to Rs.5.00 lac
                                    </b>
                                </p>


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
            </div >

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

export default MoneyTrasection;
