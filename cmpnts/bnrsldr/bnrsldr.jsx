import React, { useState, useEffect } from 'react';
import Slider from './slider';
import './bnrsldr.css';

export default function Bnrsldr(){
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const crsinfrmshncol = document.querySelector('.sldrcntnr-col'),
    prv = document.querySelector('.prv'),
    nxt = document.querySelector('.nxt');
    // console.log(crsinfrmshn);
    Slider(crsinfrmshncol, prv, nxt, index);
  });

return(
<main className="sldrmn-col">
<h1 className="pplr">Popular Cources</h1>
<div className="btns-col">
<button className="prv"><img src="../../cmpnts/images/al.png" /></button>
<button className="nxt"><img src="../../cmpnts/images/ar.png" /></button>
</div>

<div className="sldrcntnr-col">
<div className="crsinfrmshn-col">
{/* course information */}
<div className="crsinfrmshn">

<div className="crsctgr-col">
<img src="../../cmpnts/images/wd.png" />
</div>

<h4>Introduction to web development</h4>

</div>

{/***********/}
<div className="crs-col">

<div className="crsonr-col">
<img src="../../cmpnts/images/mx.png" />
</div>

<h5> by </h5>{' '}
<h4> Hassan fulieh </h4>
</div>
{/***********/}

{/***********/}
<p className="lctshrnmbr">45 <span> Lectures</span></p>
{/***********/}
{/***********/}
<p className="hrsnmbr">70 <span> Hour</span></p>
{/***********/}
<p>(5.0)</p>
{/***********/}
<a href="#" className="enrlnw">Enroll Now </a>
{/***********/}
{/***********/}

{/* course information */}
</div>

<div className="crsinfrmshn-col"><div className="crsinfrmshn"><div className="crsctgr-col"><img src="../../cmpnts/images/ad.png" /></div><h4>Android development</h4></div><div className="crs-col"><div className="crsonr-col"><img src="../../cmpnts/images/mx.png" /></div><h5> by </h5> <h4> Hassan fulieh </h4></div><p className="lctshrnmbr">45 <span> Lectures</span></p><p className="hrsnmbr">70 <span> Hour</span></p><p>(5.0)</p><a href="#" className="enrlnw">Enroll Now </a></div>

<div className="crsinfrmshn-col"><div className="crsinfrmshn"><div className="crsctgr-col"><img src="../../cmpnts/images/ml.png" /></div><h4>Machine learning</h4></div><div className="crs-col"><div className="crsonr-col"><img src="../../cmpnts/images/mx.png" /></div><h5> by </h5> <h4> Hassan fulieh </h4></div><p className="lctshrnmbr">45 <span> Lectures</span></p><p className="hrsnmbr">70 <span> Hour</span></p><p>(5.0)</p><a href="#" className="enrlnw">Enroll Now </a></div>

<div className="crsinfrmshn-col"><div className="crsinfrmshn"><div className="crsctgr-col"><img src="../../cmpnts/images/cp.png" /></div><h4>Cloud computing</h4></div><div className="crs-col"><div className="crsonr-col"><img src="../../cmpnts/images/mx.png" /></div><h5> by </h5> <h4> Hassan fulieh </h4></div><p className="lctshrnmbr">45 <span> Lectures</span></p><p className="hrsnmbr">70 <span> Hour</span></p><p>(5.0)</p><a href="#" className="enrlnw">Enroll Now </a></div>

<div className="crsinfrmshn-col"><div className="crsinfrmshn"><div className="crsctgr-col"><img src="../../cmpnts/images/ud.png" /></div><h4>UX design</h4></div><div className="crs-col"><div className="crsonr-col"><img src="../../cmpnts/images/mx.png" /></div><h5> by </h5> <h4> Hassan fulieh </h4></div><p className="lctshrnmbr">45 <span> Lectures</span></p><p className="hrsnmbr">70 <span> Hour</span></p><p>(5.0)</p><a href="#" className="enrlnw">Enroll Now </a></div>
</div>

</main>
	);
}