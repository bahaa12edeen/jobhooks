import React from 'react';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './index';
import About from './About';
// import Form from './Form';
import Contact from './Contact';


function Headers() {

    return (
        // <h1>Test</h1>
        <>
            <header>

                {/* Header Start */}
                <div className="header-area header-transparrent">
                    <div className="headder-top header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-2">
                                    {/* Logo */}
                                    <div className="logo ">
                                        <img src="../../assets/img/logo/logo.png" height="100px" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9">
                                    <div className="menu-wrapper">
                                        {/* Main-menu */}
                                        <div className="main-menu">
                                            <nav className="d-none d-lg-block">
                                                <ul id="navigation">
                                                    <BrowserRouter>
                                                        {/* <Routes> */}
                                                        <Link to="/">Home</Link>
                                                        <Link to="/About">About</Link>
                                                        <Link to="/Form">Form</Link>
                                                        <Link to="/Contact">Contact</Link>
                                                        {/* <Link to="/regis">Register</Link>
                                                   <Link to="/login">Login</Link> */}
                                                        {/* <Router>
                                                 </Router> */}
                                                        <Routes>
                                                            <Route exact path='/' element={< Home />}></Route>
                                                            <Route path='/About' element={< About />}></Route>
                                                            <Route path='/Contact' element={< Contact />}></Route>
                                                            {/* <Route exact path='/regis'  element={< Register />}></Route> 
                                                         <Route  path='/login' element={< Login />}></Route>
                                                         <Route  path='/Contact' element={< Contact />}></Route>  */}
                                                        </Routes>

                                                        {/* </Routes> */}
                                                    </BrowserRouter>

                                                </ul>
                                            </nav>
                                        </div>
                                        {/* Header-btn */}
                                        <div className="header-btn d-none f-right d-lg-block">
                                            <a herf="#" className="btn head-btn1">Register</a>
                                            <a herf="#" className="btn head-btn2">Login</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Mobile Menu */}
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header End */}
            </header>


        </>
    )

}
export default Headers