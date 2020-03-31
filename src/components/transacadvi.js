import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css'
function Transactionadvisory(props) {
    
    var displayer= [["India Entry Services","India has become most preferred destination for the global investment and business operations. The key driver of business growth in India includes huge investment potential, lower operating cost, availability of skilled and unskilled workforce, world class infrastructure etc. Starting any business operations in India requires a sound understanding about Indian regulatory system and legal formalities involved. The foreign companies who wish to start operations in India requires various regulatory approvals and documentations. Beside this Indian tax system is also very comprehensive and complicated. It requires assistance of expert professionals with the experience to resolve these complexities and smoothen the way for setting up operations in India.Armslength’s  team specializes in setting up business in India for foreign investors and international companies. We offer range of integrated professional services to help entrepreneurs set up businesses and constantly grow by leveraging all opportunities smoothly through advising them on the right financial and legal strategies for expansion. Our service offerings include initial market study to post setup support for operational optimization. Our range of customized business set up services includes:Pre entry market study	Advising a suitable legal structure Formation of the Entity Identification of partners, if needed Regulatory Compliances, Accounting, financial and tax advisory"],
    ["Sale side/ Divestitures","vCarve-outs and divestitures are a vital means of advancing corporate strategy. They are also complex and are likely becoming more so as sellers increasingly adopt a global perspective in an effort to attract more bidders and generate higher value.Divesting or selling a business needs a careful planning and attentive execution. It’s an opportunity  for value creation but the process can have high risks, emotional and fraught with financial uncertainty.Our expertise in helping clients to evaluate the implications of their divestiture across their business from any point in the deal spectrum—from day-one readiness planning to implementation of the deal and post-separation transition.Be its a sale for succession, or a spin off or sell of a piece of any business, Armslength can be a trusted adviser at every step of the way. Our deep industry experience and advanced analytics gives the client a greater insight into the options and opportunities it has. We can assist our clients,With sale readiness Execution of deal Post deal support"],
    ["Due Diligence Reviews","Any organisation considering a potential deal must evaluate all pertinent parameters of the investment.An unbiased due diligence is necessary as it analyses and validates all financial, commercial, operational and strategic aspects of the deal. Understanding of historical data of a target company is equally important as the potential for future growth of business is.Though it’s impossible to look into future, thorough our due diligence expertise, we can help our client to minimize the risk and better understand the possible future state of the target company before they commit any transaction. Our experts thoroughly examine and corroborate the strategic, financial and operational assumptions to reveal opportunities and bring probable risks to light.The experts at Armslength assists our clients into pre and post deal due diligence, either from sell side or buy side.Our due diligence services includes followings,Financial due diligence Commercial Due Diligence Operational Due Diligence Tax Due Diligence"],
    ["Merger and Acquisition","In today’s dynamic environment, mergers and acquisitions are being seen as a preferred way to amplify organic growth of a business. While these transactions provide extraordinary opportunities to increase shareholder value, they also present significant potential risks. Numerous studies in past has indicated that majority of deals fail to achieve their pre-merger expectations due to improper planning and failure to assess and mitigate the potential risks.In order to mitigate the risk of a failed transaction and maximize the probability of success, it is critical to ensure that the deal team includes professionals with significant advisory expertise. Armslength’s experienced professionals can  assist in a wide range of transactions across numerous industries. Our services assist clients through every phase of their M&A activities, including strategy development, target identification, due diligence, and post-merger integration.Our M&A advisory services includes M&A strategy development Pre-transaction planning Assessments of alternatives Coordination with other deal team members Tax planning Post-transaction support, including working capital measurements, purchase price accounting, and open balance sheet determinations"]
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

export default Transactionadvisory;