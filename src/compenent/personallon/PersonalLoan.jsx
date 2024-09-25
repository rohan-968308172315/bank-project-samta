import React from 'react'
import './PersonalLoan.css'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { MdOutlinePercent } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const PersonalLaon = () => {

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
                <div className='row personal_loan'>
                    <div className='col-md-9'></div>
                    <div className='col-md-3 personal_loan_part1'>
                        <h1>Personal Loan</h1>
                        <p className='text-success'>
                            <NavLink className="nav_links" to={'/'}>  Home <FaAngleRight /></NavLink>
                            <NavLink className="nav_links" >  Loan <FaAngleRight /></NavLink>
                            Personal Loan</p>
                    </div>
                </div>
            </div>




            <div className='container-fluid bg-light pb-5'>
                <div className='row personal_loan2'>
                    <div className='col-md-9'>
                        <div className='card card-body'>
                            <h3 style={{ fontFamily: 'Times New Roman, Times, serif', color: 'rgb(50, 31, 119)' }}>Personal Loan</h3>
                            <p>No matter why you need a personal loan, Samata Patsanstha can customize the offering for you. If you already have a Samata Patsanstha account, you can benefit from special rates, charges and offers, Samata also offers a host of benefits for first-time loan customers who enjoy the flexibility to pick a tenure that suits you and pay back the loan in pocket-friendly EMIs.</p>
                        </div>

                        <div className='row'>
                            
                            <div className='col-md-12 personal_loan2_part1'>
                                <button onClick={changeneed1}><FaInfoCircle />  <span>Features</span> </button>
                                <button onClick={changeneed2}><FaTelegramPlane /> <span>Who Can Apply</span> </button>
                                <button onClick={changeneed3}><MdOutlinePercent />  <span>Interested Rate</span> </button>
                                <button onClick={changeneed4}><IoDocument />  <span>Documents</span> </button>
                            </div>
                            <div className='col-md-12 personal_loan2_part2' id='nead1'>
                                <div className='card card-body'>
                                    <p>Personal loans help you meet your expected as well as unexpected cash requirements.</p>
                                    <ul type="none" className='p-0 ps-2 mt-3'>
                                        <li>Attractive Interest Rates</li>
                                        <li>Documentation Made Easy</li>
                                        <li>Quick Processing</li>
                                        <li>Fulfill Your Every Need</li>
                                    </ul>
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
                                        <td>15%</td>
                                    </tr>
                                </table>
                            </div>
                            <div className='col-md-12 personal_loan2_part2' id='nead4'>
                            <ul type="none" className='p-0 ps-2 mt-3'>
                                        <li>Loan Application</li>
                                        <li>Income Proof Applicant</li>
                                        <li>Photograph</li>
                                        <li>Pan Card</li>
                                        <li>Aadhar Card</li>
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

export default PersonalLaon;
