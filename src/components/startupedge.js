import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css'
function StartUpEdge(props) {
    
    var displayer= [["Startup Edge","Armslength startup division is a one-stop shop offering end-to-end solutions of financial and startup advisory services. We were with the idea that large corporate are not the only companies that should benefit from experienced finance professionals Startups can too. We are here to fill that gap.Armslength is a one-stop solution offering end-to-end accounting, financial and advisory services using high end technology. Our mission is to work with our clients as partners and provide customized, professional and holistic solutions."]];
    return (
        <div className="jumbotron">
            <div className="container-fluid">
                <hr class="my-4"></hr>
                <h1 className="display-8" id="about">Services</h1>
                <hr class="my-4"></hr>
                <h3 className="display-12" id="about">{displayer[0][0]}</h3>
                <p className="lead">{displayer[0][1]}</p>
           
            </div>
        </div>

    );


    
}

export default StartUpEdge;