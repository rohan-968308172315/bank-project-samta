import React, { useEffect } from 'react'
import './Home.css'
import { FaRegThumbsUp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoDocument } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Aos from 'aos';

const Home = () => {
    useEffect(() => {
        Aos.init();
    })

    var changeneed1 = () => {
        document.getElementById("nead1").style.display = "block";
        document.getElementById("nead2").style.display = "none";
        document.getElementById("nead3").style.display = "none";
    }
    var changeneed2 = () => {
        document.getElementById("nead2").style.display = "block";
        document.getElementById("nead1").style.display = "none";
        document.getElementById("nead3").style.display = "none";
    }
    var changeneed3 = () => {
        document.getElementById("nead3").style.display = "block";
        document.getElementById("nead1").style.display = "none";
        document.getElementById("nead2").style.display = "none";
    }
    return (
        <>
            <div className='container-fluid header1'>
                <div className='row m-0'>
                    <div className='col-sm-12 col-lg-9 header_head_part'>
                        <div className='card crad-body'>
                            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://www.samatapat.com/admin/uploads/slider/slidup660d0cea25788.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item ">
                                        <img src="https://www.samatapat.com/admin/uploads/slider/n865b0f27016f7d.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-3 header_head2'>
                        <form>
                            <h5>What Are You Loocking for?</h5>
                            <hr />
                            <select className='form_control mb-3'>
                                <option>Personal Loan</option>
                                <option>Vehicle Loan</option>
                                <option>Gold Loan</option>
                                <option>Term Deposit</option>
                                <option>Saving</option>
                                <option>Daily Deposit</option>
                                <option>Mobile Banking </option>
                                <option>Locker</option>
                            </select>

                            <input type='text' className='form_control mb-3' placeholder='Full Name' />
                            <input type='email' className='form_control mb-3' placeholder='Email Address' />
                            <input type='text' className='form_control mb-3' placeholder='Phone' />
                            <button className='Apply_btn'>APPLY NOW</button>
                        </form>
                    </div>
                </div>
            </div>



            <div className='container mt-4 header2' >
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center' style={{ fontFamily: 'Times New Roman, Times, serif' }}>Our Services</h1>
                    </div>

                    <div className='col-md-12 slider_card_responive1'>
                        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='row'>
                                        <div className='col-md-4' data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine"
                                        >
                                            <div className="card" >
                                                <img src="https://www.samatapat.com/admin/uploads/service/term-deposit-samatapt654f091678a68.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body p-0">
                                                    <h5 className="card-title">Card title 1</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4 ' data-aos="fade-up"
                                            data-aos-offset="400"
                                            data-aos-easing="ease-in-sine">
                                            <div className="card" >
                                                <img src="https://www.samatapat.com/admin/uploads/service/saving654f08f67348a.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body p-0">
                                                    <h5 className="card-title">Card title 2</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4 ' data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <div className="card" >
                                                <img src="https://www.samatapat.com/admin/uploads/service/personal-loan-samatapat654f08df32fb0.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body p-0">
                                                    <h5 className="card-title">Card title 3 </h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='row'>
                                        <div className='col-md-4 ' data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <div className="card" >
                                                <img src="https://www.samatapat.com/admin/uploads/service/neft654f08c589a86.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body p-0">
                                                    <h5 className="card-title">Card title 4</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4 ' data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <div className="card" >
                                                <img src="https://www.samatapat.com/admin/uploads/service/mobile-banking654f0886432fa.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body p-0">
                                                    <h5 className="card-title">Card title 5</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4 ' data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <div className="card" >
                                                <img src="https://www.samatapat.com/admin/uploads/service/elocaker654f0850f0e13.jpg" className="card-img-top" alt="..." />
                                                <div className="card-body p-0">
                                                    <h5 className="card-title">Card title 6</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button className="carousel-control-prev prev_btn " type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next next_btn " type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className='col-md-12 slider_card_responive2'>
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    <div className="card mb-5" >
                                        <img src="https://www.samatapat.com/admin/uploads/service/term-deposit-samatapt654f091678a68.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body p-0">
                                            <h5 className="card-title">Card title 1</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    <div className="card mb-5" >
                                        <img src="https://www.samatapat.com/admin/uploads/service/saving654f08f67348a.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body p-0">
                                            <h5 className="card-title">Card title 2</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    <div className="card mb-5" >
                                        <img src="https://www.samatapat.com/admin/uploads/service/personal-loan-samatapat654f08df32fb0.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body p-0">
                                            <h5 className="card-title">Card title 3</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className='container-fluid bg-light pb-5 pt-3'>
                <div className='container header3 mb-5 '>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='text-center' style={{ fontFamily: 'Times New Roman, Times, serif' }}>Gold Loan</h1>
                            <p className='text-center' style={{ fontFamily: 'Times New Roman, Times, serif' }}>Avail Gold loan at a truly unparalleled rate of interest to overcome financial exigenies.</p>
                        </div>
                        <div className='col-md-3' data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className='card card-body'>
                                <img src='https://www.samatapat.com/admin/uploads/gold_loan_benefit/deal654f0ee26d389.png' />
                                <h4 className='mt-2'>Hassle free documentation</h4>
                            </div>
                        </div>
                        <div className='col-md-3' data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className='card card-body'>
                                <img src='https://www.samatapat.com/admin/uploads/gold_loan_benefit/loan654f0ed05e778.png' />
                                <h4 className='mt-2'>Speedy sanction & Disbursal of loans</h4>
                            </div>
                        </div>
                        <div className='col-md-3' data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className='card card-body'>
                                <img src='https://www.samatapat.com/admin/uploads/gold_loan_benefit/safe-box654f0ebfbdd8c.png' />
                                <h4 className='mt-2'>Safety of Gold ornaments</h4>
                            </div>
                        </div>
                        <div className='col-md-3 ' data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className='card card-body'>
                                <img src='https://www.samatapat.com/admin/uploads/gold_loan_benefit/prepayment654f0e96ddfbc.png' />
                                <h4 className='mt-2'>Zero prepayment charges</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <div className='container-fluid mt-5 mb-5 header4'>
                <div className='row'>
                    <div className='col-md-5 header4_part1'>
                        <img src='https://www.samatapat.com/admin/uploads/homepage/aboutimg6548b80ce9135.jpg' />
                    </div>
                    <div className='col-md-7 header4_part2'>
                        <h1>ABOUT US</h1>
                        <h6>All-round progress of Samata Civil Co-operative Credit Institutions :</h6>
                        <p>
                            With a view to meet the financial needs of the small traders in Kopargaon town, Samata was established on 11 May 1986 in a premises of 10 by 15 feet on Shivaji Road with a share capital of Rs 1 lakh, deposits of Rs 3 lakh and 700 members to bring equality among the small traders of the taluka Civic Cooperative Credit Institution was established. Since the inception of Samata, maintaining the principles of co-operation on the basis of co-operative principles, in the initial four years till 1991, the institution had attained the deposits of Rs.1 crore. After that, under the guidance of Chairman Omprakash Dadappaalias Kaka Koyate and Board of Directors of Samata Credit Union, Samata is taking the graph of financial progress higher without looking back. Today, Samata Credit Union has 21 extended gold loan counters with 13 branches and has a network of Samata Credit Union all over Maharashtra. Samata Patsanstha has 67,982 members through 16 branches and 23 gold loan extensions counter,extended cells as on 24 May 2022. While disbursing Rs. 665 crore 81 lakh deposits and disbursing loans of Rs 497 crore, it has crossed the milestone of Rs 1,200 crore combined business.
                        </p>
                        <button>Read More ➡</button>
                    </div>
                </div>
            </div>

            <div className='container-fluid bg-light pt-5 pb-5 header5'>
                <div className='row'>
                    <div className='col-md-12 p-4'>
                        <h1>All you need to know</h1>
                    </div>
                    <div className='col-md-12 header5_part1'>
                        <button onClick={changeneed1}><FaRegThumbsUp />  <span>Features</span> </button>
                        <button onClick={changeneed2}><GoArrowUpRight />  <span>Eligibility</span> </button>
                        <button onClick={changeneed3}><IoDocument />  <span>Documents</span> </button>
                    </div>
                    <div className='col-md-12 header5_part2' id='nead1' data-aos="fade-up">
                        <ul type="none" className='p-0 ps-2 mt-3'>
                            <li>Hassle free documentation</li>
                            <li>Speedy sanction & Disbursal of loans</li>
                            <li>Safety of Gold Ornaments</li>
                        </ul>
                    </div>
                    <div className='col-md-12 header5_part2' id='nead2' data-aos="fade-up">
                        <ul type="none" className='p-0 ps-2 mt-3'>
                            <li>
                                The applicant must be true owner of the gold ornaments and jewellery to be pledged with the bank.
                            </li>
                            <li>
                                Min Age: 21 years while applying.
                            </li>
                            <li>
                                Max Age: Max: 60 years at loan maturity.
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-12 header5_part2' id='nead3' data-aos="fade-up">
                        <ul type="none" className='p-0 ps-2 mt-3'>
                            <li>Duly filled form</li>
                            <li>Income Proof Of Applicant</li>
                            <li>KYC Documents</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container-fluid mt-5 mb-5 header6'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center' style={{ fontFamily: 'Times New Roman, Times, serif' }}>Videos</h1>
                    </div>
                    <div className='col-md-3 header_part1' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='card card-body p-0'>
                            <img src='https://img.youtube.com/vi/4yoVpCAgNqE/hqdefault.jpg' className='w-100' />
                            <a href='https://youtu.be/4yoVpCAgNqE?si=Hhf73RBXPJufZL7G' target='_blank'><FaYoutube /></a>
                            <h5 style={{ fontFamily: 'Times New Roman, Times, serif' }} className='ps-2'>Don't be tempted by high interest rates, insist on...</h5>
                        </div>
                    </div>
                    <div className='col-md-3 header_part1' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='card card-body p-0'>
                            <img src='https://img.youtube.com/vi/E29HIuhI5RM/hqdefault.jpg' className='w-100' />
                            <a href='https://youtu.be/4yoVpCAgNqE?si=Hhf73RBXPJufZL7G' target='_blank'><FaYoutube /></a>
                            <h5 style={{ fontFamily: 'Times New Roman, Times, serif' }} className='ps-2'>Don't be tempted by high interest rates, insist on...</h5>
                        </div>
                    </div>
                    <div className='col-md-3 header_part1' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='card card-body p-0'>
                            <img src='https://img.youtube.com/vi/tesVToUx-l4/hqdefault.jpg' className='w-100' />
                            <a href='https://youtu.be/4yoVpCAgNqE?si=Hhf73RBXPJufZL7G' target='_blank'><FaYoutube /></a>
                            <h5 style={{ fontFamily: 'Times New Roman, Times, serif' }} className='ps-2'>Don't be tempted by high interest rates, insist on...</h5>
                        </div>
                    </div>
                    <div className='col-md-3 header_part1' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='card card-body p-0'>
                            <img src='https://img.youtube.com/vi/DYGGIL3ialA/hqdefault.jpg' className='w-100' />
                            <a href='https://youtu.be/4yoVpCAgNqE?si=Hhf73RBXPJufZL7G' target='_blank'><FaYoutube /></a>
                            <h5 style={{ fontFamily: 'Times New Roman, Times, serif' }} className='ps-2'>Don't be tempted by high interest rates, insist on...</h5>
                        </div>
                    </div>

                    <div className='col-md-12 header6_part2 text-center'>
                        <button>VIEW ALL VIDEOS</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
