import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='container-fluid nav_head'>
                <div className='row'>
                    <div className='col-12 p-0'>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <NavLink className=" navbar-brand" to="/">
                                    <img src='https://www.samatapat.com/images/logo.png' />
                                    <img src='https://www.samatapat.com/admin/uploads/setting/samapat-name6544c0aa348d2.png' />
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className=" nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className=" nav-link" to="/about">About Us</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className=" nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Deposits
                                            </NavLink>
                                            <div className="dropdown-menu ">
                                                <NavLink className=" dropdown-item" to="/liquidity-base-protection-fund">Samata Liquidity best protection fund</NavLink>
                                                <NavLink className=" dropdown-item" to="/term-deposit">Term Deposit</NavLink>
                                                <NavLink className=" dropdown-item" href="#">Saving </NavLink>
                                                <NavLink className=" dropdown-item" href="#">Current </NavLink>
                                                <NavLink className=" dropdown-item" href="#">Daily Deposit</NavLink>
                                                <NavLink className=" dropdown-item" href="#">Recuring</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className=" nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                LOANS
                                            </NavLink>
                                            <div className="dropdown-menu ">
                                                <NavLink className=" dropdown-item" to="/pernal-loan">Personal Lone</NavLink>
                                                <NavLink className=" dropdown-item" to="/vehicle-loan">Vehicle Lone</NavLink>
                                                <NavLink className=" dropdown-item" href="#">Gold Lone </NavLink>
                                                <NavLink className=" dropdown-item" href="#">Bussiness Loan </NavLink>
                                                <NavLink className=" dropdown-item" href="#">Property Against Loan</NavLink>
                                                <NavLink className=" dropdown-item" href="#">FD Loan</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className=" nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Services
                                            </NavLink>
                                            <div className="dropdown-menu ">
                                                <NavLink className=" dropdown-item" to="/mobile-banking">Mobile Banking</NavLink>
                                                <NavLink className=" dropdown-item" to="/money-transection">Money Transfer</NavLink>
                                                <NavLink className=" dropdown-item" href="#">Locker</NavLink>
                                                <NavLink className=" dropdown-item" href="#">Micro ATM </NavLink>
                                                <NavLink className=" dropdown-item" href="#">Paper Less banking</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className=" nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className=" nav-link" to="/notice">Notice</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" nav-link" href="https://samatawarta.in/" >
                                            Gallery
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className=" nav-link" to="/career">Career</NavLink>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
