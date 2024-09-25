import React from 'react'
import './TermDeposit.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { MdOutlinePercent } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa";


const TermDeposit = () => {

    var changeneed1 = () => {
        document.getElementById("nead1").style.display = "block";
        document.getElementById("nead2").style.display = "none";
        document.getElementById("nead3").style.display = "none";
        document.getElementById("nead4").style.display = "none";
    }
    var changeneed2 = () => {
        document.getElementById("nead2").style.display = "block";
        document.getElementById("nead1").style.display = "none";
        document.getElementById("nead3").style.display = "none";
        document.getElementById("nead4").style.display = "none";
    }
    var changeneed3 = () => {
        document.getElementById("nead3").style.display = "block";
        document.getElementById("nead1").style.display = "none";
        document.getElementById("nead2").style.display = "none";
        document.getElementById("nead4").style.display = "none";
    }

    var changeneed4 = () => {
        document.getElementById("nead4").style.display = "block";
        document.getElementById("nead1").style.display = "none";
        document.getElementById("nead2").style.display = "none";
        document.getElementById("nead3").style.display = "none";
    }
    return (
        <>
            <div className='container-fluid pb-5 bg-light'>
                <div className='row term_deposite1'>
                    <div className='col-md-9'></div>
                    <div className='col-md-3 term_deposite_part1'>
                        <h1>Term Deposit</h1>
                        <p className='text-success'>
                            <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
                            <NavLink className="nav_links" >  Deposits <FaAngleRight /></NavLink>
                            Term Deposits</p>
                    </div>
                </div>
            </div>




            <div className='container-fluid bg-light pb-5'>
                <div className='row term_deposite2'>
                    <div className='col-md-9'>
                        <div className='card card-body'>
                            <h3 style={{ fontFamily: 'Times New Roman, Times, serif', color: 'rgb(50, 31, 119)' }}>Term Deposit</h3>
                            <p>Terms deposits are an extremely safe investment and are therefore very appealing to conservative, low-risk investors. In Monthly Income Scheme Deposit, we all require certain amount for our day to day expenses and for that by investing certain lump sum amount for specific period of time.</p>
                        </div>

                        <div className='row'>
                            <div className='col-md-12 p-4'>
                                <h1>All you need to know</h1>
                            </div>
                            <div className='col-md-12 term_deposite2_part1'>
                                <button onClick={changeneed1}><IoMdInformationCircle />  <span>Information</span> </button>
                                <button onClick={changeneed2}><MdOutlinePercent />  <span>Interested Rate</span> </button>
                                <button onClick={changeneed3}><IoDocument />  <span>Documents</span> </button>
                                <button onClick={changeneed4}><FaCalculator />  <span>Calculator</span> </button>
                            </div>
                            <div className='col-md-12 term_deposite2_part2' id='nead1'>
                                <div className='card card-body'>
                                    <h4>Depositing amount for fixed period</h4>
                                    <ul type="none" className='p-0 ps-2 mt-3'>
                                        <li>Period of deposit is minimum 1 Month to 36 Months</li>
                                        <li>Repayment with interest on maturity date</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-12 term_deposite2_part2' id='nead2'>
                                <table>
                                    <tr>
                                        <th>Days/month</th>
                                        <th>Interest Rate (%)</th>
                                    </tr>
                                    <tr>
                                        <td>46 days to 90 days</td>
                                        <td>5.00%</td>
                                    </tr>
                                    <tr>
                                        <td>91 days to 180 days</td>
                                        <td>6.00%</td>
                                    </tr>
                                    <tr>
                                        <td>181 days to 270 days</td>
                                        <td>7.00%</td>
                                    </tr>
                                    <tr>
                                        <td>271 days to 364 days</td>
                                        <td>8.00%</td>
                                    </tr>
                                    <tr>
                                        <td>12 months complete	</td>
                                        <td>8.75%</td>
                                    </tr>
                                    <tr>
                                        <td>12 months complete for senior citizen / handicapped / widow /ex- army person</td>
                                        <td>9.25%</td>
                                    </tr>
                                    <tr>
                                        <td>18 months complete for senior citizen / handicapped / widow /ex- army person</td>
                                        <td>9.50%</td>
                                    </tr>
                                    <tr>
                                        <td> 18 months 1 day to 60 months</td>
                                        <td>8.00%</td>
                                    </tr>
                                    <tr>
                                        <td>18 months complete</td>
                                        <td>9.00%</td>
                                    </tr>

                                </table>

                            </div>
                            <div className='col-md-12 term_deposite2_part2' id='nead3'>
                                <ul type="none" className='p-0 ps-2 mt-3'>
                                    <li>Photograph</li>
                                    <li>Pan card</li>
                                    <li>Aadhar Card</li>
                                </ul>
                            </div>
                            <div className='col-md-12 term_deposite2_part2' id='nead4'>
                                <form>
                                    <input type='text' placeholder='Deposit Amount' className='form_control' /><br /><br />
                                    <input type='text' placeholder='Days' className='form_control' /><br /><br />
                                    <button className='Apply_btn'>SEND NOW</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 term_deposite_head2'>
                        <form>
                            <h5>Enquire Now</h5>
                            <hr />
                            <input type='text' className='form_control mb-3' placeholder='Full Name' />
                            <input type='email' className='form_control mb-3' placeholder='Email Address' />
                            <input type='text' className='form_control mb-3' placeholder='Phone' />
                            <input type='text' className='form_control mb-3' placeholder='City' />
                            <textarea type='text' className='form_control mb-3' placeholder='Message' />
                            <button className='Apply_btn'>SEND NOW</button>
                        </form>
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

export default TermDeposit
