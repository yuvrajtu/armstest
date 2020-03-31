import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css';
import base from './base.jpg';
import service from './services.png';
import team from './team.png';

function Home(props) {
    return (

        <div>


            <div className="img-wrapper">
                <img classNameNameName="img-responsive" src={base} />
                <div className="img-overlay">
                    <h1>ARMSLENGTH</h1>
                    <button className="btn btn-md btn-success">Button</button>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 id="about">About Us</h1>
                    <p className="lead">Armslength Advisors Private Limited  is a  boutique valuation firm specialized in the discipline of valuation of business, shares, assets- tangible & intangible, properties including intellectual property rights (IPRs) etc for the purposes like transactions, M&A, PPA, disputes  and compliances. Armslength’s focus is to provide a robust solution for any matter related to valuation. Founded by a group seasoned finance professionals, we are a Private Company registered under the Companies Act, 2013. A performance oriented internal knowledge management systems and a decentralized chain of command clubbed with an ambiance of respect and amity is our biggest asset, setting our Company apart from others. Ideation, creativity, timeliness and mental storming are paramount values and processes at Armslength.
                    We provide best practices  valuation and related services to our client .
</p>
                </div>
            </div>

            <div className="container-fluid" id="services">
                <img src={service} id="Iservices"></img>
                <h1 id="hservices">Services</h1>
                <p className="lead" id="pservices">We are a boutique valuation firm specialized in the discipline of valuation of business, shares, assets- tangible & intangible, properties including intellectual property rights (IPRs) etc for the purposes like transactions, M&A, PPA, disputes  and compliances. </p>
            </div>

            <div className="jumbotron jumbotron-fluid" id="services">

                <h1 id="hteam">Team</h1>
                <p id="pteam">We are a boutique valuation firm specialized in the discipline of valuation of business, shares, assets- tangible & intangible, properties including intellectual property rights (IPRs) etc for the purposes like transactions, M&A, PPA, disputes  and compliances. </p>
                <img src={team} id="Iteam" />
            </div>


        </div>


    );

}

export default Home;