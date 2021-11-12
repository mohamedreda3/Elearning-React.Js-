import React from 'react';
import './bnr.css';

export default function Bnr(){
    return(
<main>

<div className="bnrimg-col">
<img src="../../cmpnts/images/mon.png" />
</div>

<div className="bnrcntnt-col">
<h1>Benefits of online learning</h1>

<div className="bnrclmn-col">
<div className="bnrclmnimg">
<img src="../../cmpnts/images/ol.png" />
</div>

<div className="bnrclmntxt-col">
<h3>Online Courses</h3>
<span>Online Courses including keeping up with the rest of the class, and deadline pressures.</span>
</div>
</div>

<div className="bnrclmn-col">
<div className="bnrclmnimg">
<img src="../../cmpnts/images/oc.png" />
</div>

<div className="bnrclmntxt-col">
<h3>Online Learning</h3>
<span>Online learning is becoming a more traditional approach to achieving educational goals.</span>
</div>
</div>

<div className="bnrclmn-col">
<div className="bnrclmnimg">
<img src="../../cmpnts/images/ob.png" />
</div>

<div className="bnrclmntxt-col">
<h3>Online Books (PDFs)</h3>
<span>E-Books are portable and lightweight, making it easy to carry around. </span>
</div>
</div>


</div>

</main>
    );

}