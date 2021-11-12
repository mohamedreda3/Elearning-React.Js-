import React from 'react';
import './hdr.css';

export default function Header(){
    return(
<header className="hdr">

    <div className="hdrcntnt-col">
        <div className="hdricn-col">
            <div className="hdricn">
            <img src="../../cmpnts/images/logo.png"/>
            </div>
        <h1>Welcome to FCIA.</h1>
        </div>
        <span>E-Learning exploits interactive technologies and communication systems to improve the learning experience.</span>
        <div className="hrdbtns-col">
            <a href="#">Get Started</a>
            <a href="#">View Courses</a>
        </div>
    </div>

    <div className="hdrimg-col">
    <img src="../../cmpnts/images/E.png" />
    </div>

</header>
    );

}