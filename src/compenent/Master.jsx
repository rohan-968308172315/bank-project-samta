import React from 'react'
import Navbar from './nav/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Footer from './footer/Footer'
import About from './about/About'
import LiquidBase from './liquid/LiquidBase'
import TermDeposit from './termdeposit/TermDeposit'
import PersonalLaon from './personallon/PersonalLoan'
import VehicleLoan from './vehicleloan/VehicleLoan'
import MobileBanking from './mobilebanking/MobileBanking'
import MoneyTrasection from './moneytransection/MoneyTrasection'
import Contact from './contact/Contact'
import Notice from './notice/Notice'
import Career from './career/Career'

const Master = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/liquidity-base-protection-fund' element={<LiquidBase />} />
          <Route path='/term-deposit' element={<TermDeposit />} />
          <Route path='/pernal-loan' element={<PersonalLaon />} />
          <Route path='/vehicle-loan' element={<VehicleLoan />} />
          <Route path='/mobile-banking' element={<MobileBanking />} />
          <Route path='/money-transection' element={<MoneyTrasection />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/career' element={<Career />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default Master
