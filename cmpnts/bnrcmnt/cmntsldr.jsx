import React,{Component} from 'react';
import './cmnt.css';

export default function(props){
return(
<div className='sldrcmnt'>
<div className='prsn'>
<div className="prsnimg">
<img src="../../cmpnts/images/mx.png" />
</div>
<div className='prsninfrmshn'>
<h3>Lorem Ipsum</h3>
<h4>{props.name}</h4>
</div>
</div>
<div className='cmntcntnt'>
<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
</div>
</div>
    );
}