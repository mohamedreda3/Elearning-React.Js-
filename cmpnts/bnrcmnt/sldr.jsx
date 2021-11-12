import React from 'react';
import './cmnt.css';
export default function Sldr(a, b, c, d, i){
 var frstcln = a.childNodes[0];
    var lstcln = a.childNodes[b - 1];
    frstcln.id = 'frstcln';
    lstcln.id = 'lstcln';
    a.append(frstcln.cloneNode(true));
    a.prepend(lstcln.cloneNode(true));
    b = a.childNodes.length;
a.style.gridTemplateColumns = `repeat(${b},100%)`;
c.onclick = function(){
    a.style.transition = `0.5s ease`;
    if(i < b-1){
       i++;
    }
    // a.style.gridTemplateColumns = `repeat(${b},100%)`;
    a.style.marginLeft = `-${2*i*100}%`;
    console.log(i);
};

d.onclick = function(){
    // console.log(a);
    // console.log(b);
    a.style.transition = `0.5s ease`;
    if(i > 0){
        --i;
    }
    console.log(i);
// a.style.gridTemplateColumns = `repeat(${b},100%)`;
a.style.marginLeft = `-${2*i*100}%`;
};
a.ontransitionend = function(){
        if(lstcln.id === a.childNodes[i].id){
        i = b - 2;
        a.style.transition = `none`;
        a.style.marginLeft = `-${2*i*100}%`;   
        }     

        if(frstcln.id === a.childNodes[i].id){
        i = 1;
        a.style.transition = `none`;
        a.style.marginLeft = `-${2*i*100}%`;   
        }  
    }
}