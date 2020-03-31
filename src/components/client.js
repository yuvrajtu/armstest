import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css'
import clientimage from './client.png'
function Client(props) {

    return (
        <div className="jumbotron">
            <div className="container-fluid">
            <img src={clientimage} id="iclient"></img>
            </div>
        </div>

    );
}

    export default Client;