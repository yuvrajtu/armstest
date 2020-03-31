import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css'
import './navstyle.css'
import logo from './logo.png'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light " style={{backgroundColor:'#aeb1bf',paddingTop:'1px',paddingBottom:'1px'}}>
         <img src={logo} id="ilogo" style={{height:'85px'}}></img>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-menu" id="navbarNav">
                <ul className="navbar-nav" style={{paddingLeft:'20%'}}>
                    <li className="nav-item ">
                        <a className="nav-link" href={'/home'}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={'/about'}>About</a>
                    </li>
                    <li class=" drop-down nav-item"><a href="">Services</a>
                        <ul>
                            <li class="drop-down"><a href={''}>Valuation Advisor</a>
                                <ul>
                                    <li><a href={'/service/valuation/0'}>Valuation for M&A Transaction and Restructuring</a></li>
                                    <li><a href={'/service/valuation/1'}>Litigation and Settlement Valuation</a></li>
                                    <li><a href={'/service/valuation/2'}>Real Estate Valuation </a></li>
                                    <li><a href={'/service/valuation/3'}>Compliance Valuation</a></li>
                                    <li><a href={'/service/valuation/4'}>Financial Reporting Valuation</a></li>
                                </ul>
                            </li>
                            <li class="drop-down"><a href={''}>Transaction Advisory</a>
                                <ul>
                                    <li><a href={'/service/tractional-advisory/0'}>India Entry Services</a></li>
                                    <li><a href={'/service/tractional-advisory/1'}>Sale side/ Divestitures</a></li>
                                    <li><a href={'/service/tractional-advisory/2'}>Due Diligence Reviews</a></li>
                                    <li><a href={'/service/tractional-advisory/3'}>Merger and Acquisition</a></li>
                                </ul>
                            </li>
                            <li class="drop-down"><a href={''}>Financial Modelling</a>
                                <ul>
                                    <li><a href={'/service/financialmodel/0'}>Model Construction</a></li>
                                    <li><a href={'/service/financialmodel/1'}>Model Review</a></li>
                                    <li><a href={'/service/financialmodel/2'}>Project Analysis</a></li>
                                </ul>
                            </li>
                            <li class="drop-down"><a href={''}>Transfer Pricing Advisory</a>
                                <ul>
                                    <li><a href={'/service/transferpricingadvisory/0'}>Transfer Pricing Documentation</a></li>
                                    <li><a href={'/service/transferpricingadvisory/1'}>Litigation Support/ Transfer Pricing Controversy Management</a></li>
                                    <li><a href={'/service/transferpricingadvisory/2'}>Advance Pricing Arrangements</a></li>
                                    <li><a href={'/service/transferpricingadvisory/3'}>Transfer Pricing Ancillary Services</a></li>
                                </ul>
                            </li>
                            <li><a href={'/service/startupedge'}>Startup Edge</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={'/clients'}>Clients</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={'/team'}>Team</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href={''}>Knowledge</a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href={'/contactus'}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>


    );
}

export default Navbar;