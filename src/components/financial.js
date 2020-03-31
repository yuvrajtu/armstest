import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css'
function Financialmodel(props) {
    
    var displayer= [["Model Construction","established best practice methodology and independently quality assured by our separate model review team. We know that financial models can be complicated, so we design our models to be user friendly, flexible and tailored to clients’ needs. Our team can support by either building models for client to use or training their staff in our model development approach."]
            ,["Model Review","As financial models become ever more complex, the need for a rigorous and independent review of the model becomes more pressing. We perform reviews on existing models, to test the mathematical accuracy and integrity of the model or to confirm that the assumptions have been accurately incorporated into the model.We work closely with our clients, banks and sponsors and our experience encompasses project finance, Public Private Partnerships, working capital, and mergers and acquisition modeling."]
            ,["Project Analysis","Complex financial models are the key to the majority of private and public sector projects that require appraisal.Armslength provides support to project finance funders, private sector shareholders and credit guarantee agencies on all financial aspects of project finance.We will respond promptly and be flexible when faced with demanding project deadlines."]
];
    return (
        <div className="jumbotron">
            <div className="container-fluid">
                <hr class="my-4"></hr>
                <h1 className="display-8" id="about">Services</h1>
                <hr class="my-4"></hr>
                <h3 className="display-12" id="about">{displayer[props.val][0]}</h3>
                <p className="lead">{displayer[props.val][1]}</p>
           
            </div>
        </div>

    );


    
}

export default Financialmodel;