import React from 'react';
import './nv.css';

export default function Nv(){
	function addActive(){
	const bnrnvmnu = document.querySelector('.bnrnvmnu-col'),
	mnpgs = document.querySelector('.mnpgs-col');
		mnpgs.classList.toggle('active');
}
  return(
    <nav>
<section className="tpnv-col">
<div className="lgo-col">
<div className="lgoimg-col">
<img src="../../cmpnts/images/icon.png" />
</div>
<h3 className="ttl-col">FCIA</h3>
</div>
<h4 className="evrydy-scshn">
<em className="txt">Every Day from</em>
<span><em className="from"> 8:00 <em>AM</em> </em><em className="txt">To</em><em className="from"> 11:00 <em>PM</em> </em> </span>
</h4>

<div className="sshlmdia-col">
<a href="#"><div><img src="../../cmpnts/images/w.png" /></div></a>
<a href="#"><div><img src="../../cmpnts/images/f.png" /></div></a>
<a href="#"><div><img src="../../cmpnts/images/t.png" /></div></a>
<a href="#"><div><img src="../../cmpnts/images/l.png" /></div></a>
<a href="#"><div><img src="../../cmpnts/images/i.png" /></div></a>
<a href="#"><div><img src="../../cmpnts/images/g.png" /></div></a>
</div>
</section>
<div className="btmnv">
<section className="btmnv-col">
    <div className="bnrnvmnu-col" onClick={()=>addActive()}>
        <span className="frstmnu-col"></span>
        <span className="scndmnu-col"></span>
        <span className="srdmnu-col"></span>
        <span className="frsmnu-col"></span>
    </div>
<ul className="mnpgs-col">
<a href="#"><li>Home</li></a>
<a href="#"><li>AllCourses</li></a>
<a href="#"><li>About</li></a>
<a href="#"><li>Team</li></a>
<a href="#"><li>contact</li></a>
</ul>
<a href="#" className="jnus-col">Join Us</a>
</section>
</div>
    </nav>
  );
}