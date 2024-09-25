import React from 'react'
import './VehicleLoan.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { MdOutlinePercent } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const VehicleLoan = () => {

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

   
    return (
        <>
            <div className='container-fluid pb-5 bg-light'>
                <div className='row personal_loan'>
                    <div className='col-md-9'></div>
                    <div className='col-md-3 personal_loan_part1'>
                        <h1>Vehical Loan</h1>
                        <p className='text-success'>
                            <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
                            <NavLink className="nav_links" >  Loan <FaAngleRight /></NavLink>
                            Vehical Loan</p>
                    </div>
                </div>
            </div>




            <div className='container-fluid bg-light pb-5'>
                <div className='row personal_loan2'>
                    <div className='col-md-9'>
                        <div className='card card-body'>
                            <h3 style={{ fontFamily: 'Times New Roman, Times, serif', color: 'rgb(50, 31, 119)' }}>Vehical Loan</h3>
                            <p>Why not own your dream car today. The one you’ve always been waiting for? Our Car Loan is quick and comes with exclusive features like 90% financing on select vehicles, flexible repayment tenure and pocket-friendly EMI so that you get the dream car you want, in a matter of minutes!</p>
                        </div>

                        <div className='row'>

                            <div className='col-md-12 personal_loan2_part1'>
                                <button onClick={changeneed1}><FaTelegramPlane /> <span>Who Can Apply</span> </button>
                                <button onClick={changeneed2}><MdOutlinePercent />  <span>Interested Rate</span> </button>
                                <button onClick={changeneed3}><IoDocument />  <span>Documents</span> </button>
                            </div>
                            <div className='col-md-12 personal_loan2_part2' id='nead1'>
                                <div className='card card-body'>
                                    <p style={{ lineHeight: '40px' }}>Any account holder who is a Salaried Employee / Businessman / Professional with repaying capacity<br></br>

                                        <b>Purpose:</b> For purchase of new vehicle for own use or for commercial use</p>
                                </div>
                            </div>
                            <div className='col-md-12 personal_loan2_part2' id='nead2'>
                                <p><b>Purpose:</b> Personal needs such as Housing, Education, Medical Emergencies, Travel etc.</p>


                            </div>
                            <div className='col-md-12 personal_loan2_part2' id='nead3'>
                                <table border={'1'} >
                                    <tr>
                                        <th>Days/month</th>
                                        <th>Interest Rate (%)</th>
                                    </tr>
                                    <tr>
                                        <td>12 months to 36 months	</td>
                                        <td>12%</td>
                                    </tr>
                                </table>
                            </div>
                            <div className='col-md-12 personal_loan2_part2' id='nead4'>
                                <ul type="none" className='p-0 ps-2 mt-3'>
                                    <li>Loan Application</li>
                                    <li>Photograph</li>
                                    <li>Pan Card</li>
                                    <li>Driving Licence</li>
                                    <li>Stamp Paper</li>
                                    <li>Cheque & Bank Statement</li>
                                    <li>Quotation</li>
                                    <li>RTO Form Set</li>
                                    <li>IT Return, CIBIL Report</li>
                                    <li>Two Guarantors with all above Documents</li>
                                </ul>
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

export default VehicleLoan;
