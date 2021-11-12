import React from 'react';
import './ftr.css'
export default function(){
    return(
        <footer>
<section className="container">
	<div className="lgo-col nftr">
<div className="titllgo-col"><h2>Eco Clothing</h2></div>
<div className="imglgo-col"><img src="../../cmpnts/images/mx.png" /></div>
</div>
 <section className="one">
  <h2 className="heading">
    please subscribe to get updates
  </h2>
  <p> signup with your email to get latest updates 
  </p>
  <form>
    <input type='text' id="subscribe" placeholder="enter your email" /><br/>
    <button className="btn" role="button">
      subscribe
    </button>
  </form>
  </section>
  <section className="two">
    <h3>
      thank you for subscribing !
    </h3>
  </section>
</section>
<div className="lnks-col">
<ul>
<li className="drpmnu-col">Customer Service</li>
<ul className="dropped">
<li><a href="#">Help Faqs</a></li>
<li><a href="#">Store Locator</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">Privacy</a></li>
</ul>
</ul>
<ul>
<li className="drpmnu-col">Useful Links</li>
<ul className="dropped">
<li><a href="#">Terms Conditions</a></li>
<li><a href="#">Shipping</a></li>
<li><a href="#">Returns</a></li>
<li><a href="#">AfterPay</a></li>
<li><a href="#">Zip Pay</a></li>
<li><a href="#">Latitude Pay</a></li>
</ul>
</ul>
<ul>
<li className="drpmnu-col">CC World</li>
<ul className="dropped">
<li><a href="#">World of Curves</a></li>
<li><a href="#">Refer a Friend</a></li>
<li><a href="#">Size Guide</a></li>
<li><a href="#">CC Nation Loyalty</a></li>
<li><a href="#">Gift Cards</a></li>
<li><a href="#">CC Story</a></li>
<li><a href="#">Corporate</a></li>
</ul>
</ul>
<ul>
<li className="drpmnu-col">Clothing</li>
<ul className="dropped">
<li><a href="#">Plus Size Lingerie</a></li>
<li><a href="#">Plus Size Dresses</a></li>
<li><a href="#">Plus Size Denim</a></li>
<li><a href="#">Plus Size Tops</a></li>
</ul>
</ul>
<p class="cp-text">
    © Copyright 2021 By LOVE. All rights reserved.
</p>
</div>	
</footer>
    );
}