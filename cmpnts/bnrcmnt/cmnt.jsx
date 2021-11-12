import React, { useState, useEffect } from 'react';
import './cmnt.css';
import Cmnt from './cmntsldr';
import Sldr from './sldr';

export default function(){
        const [i, setI] = useState(0);
        useEffect(()=>{
        const sldrs = document.querySelector('.sldrs');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        const long = sldrs.childNodes.length;
        Sldr(sldrs, long, prev, next, i);
        });

    return(
        <div className="cmnt-col">
        <h2>Some Comments of our students</h2>
        <div className="btns-col">
        <button className="prev"><img src="../../cmpnts/images/al.png" /></button>
        <button className="next"><img src="../../cmpnts/images/ar.png" /></button>
        </div>
        <div className="sldrs">
        <Cmnt name = "Web-devlopment"/>
        <Cmnt name = "Mobile-devlopment"/>
        <Cmnt name = "Flutter-devlopment"/>
        <Cmnt name = "Web-devlopment"/>
        <Cmnt name = "Cloud-computing"/>

        </div>
        </div>
    );
}