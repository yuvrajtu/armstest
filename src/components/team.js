import React, { Component } from 'react';
import './bootstrap.min.css';
import './style.css'
import team1 from './team1.png'
function Team(props) {

    return (
        <div className="jumbotron">
            <div className="container-fluid">
            <img src={team1} id="iclient"></img>
            </div>
        </div>

    );
}

    export default Team;