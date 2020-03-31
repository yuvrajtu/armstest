import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css'
function TransferPricingAdvicery(props) {
    
    var displayer= [["Transfer Pricing Documentation","The Transfer Pricing legislation requires that income from International Transactions between Associated Enterprises is computed at arm’s length price. The term “Arm’s-length Price” refers to the price that would be charged for a similar International Transaction between unrelated third parties. The Transfer Pricing Studies by Armslength Advisors covers the various mandatory requirements under the law and includes:Background of the Company and its Associated Enterprises,Functional Analysis to document the Functions, Risks and Assets deployed,Industry Overview,Comparability/Benchmarking analysis to prove the Arm’s Length nature of International Transactions entered into between Associated Enterprises  "]
    ,["Litigation Support/ Transfer Pricing Controversy Management","These services include representation before the designated Transfer Pricing Officers/Assessing Officers for Transfer Pricing related matters. The scope of services provided also covers representation before higher authorities like Commissioner of Income Tax etc. The Armslength’s team work with the client to develop strategies and appropriate practices to manage the audit/appeal proceedings.  "]
    ,["Advance Pricing Arrangements","We can assist our clients in preparation of a robust Transfer Pricing policy aligning with business and commercial substance along with deciding on various documents and information that need to be shared with tax authorities during the course of negotiating and implementation of an APA program"]
    ,["Transfer Pricing Ancillary Services","Our Ancillary  Services relating to Transfer Pricing are :Planning Opportunities to achieve lower taxation for the group,Assisting clients in Benchmarking vis a vis other players in the same industry,Drafting of Inter-Company agreements, review of documentation etc   "]
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

    export default TransferPricingAdvicery;