import React from 'react';
import './bnrsldr.css';

export default function Slider(a,c,d,i,z,ti = ''){
    var long = a.childNodes.length;
    var frstcln = a.childNodes[0];
    var lstcln = a.childNodes[long - 1];
    frstcln.id = 'frstcln';
    lstcln.id = 'lstcln';
    a.append(frstcln.cloneNode(true));
    a.prepend(lstcln.cloneNode(true));
    long = a.childNodes.length;
    a.style.gridTemplateColumns = `repeat(${long},67vh)`;
    a.style.transform = `translateX(-${1*67}vh)`;
let xr;
    c.onclick = function(){
        if(i > (0)){
        --i;
        // a.prepend(a.childNodes[long - 1]);
        // a.style.gridTemplateColumns = `repeat(${long},67vh)`;
        a.style.transition = `0.8s ease`;
        }
        a.style.transform = `translateX(-${i*67}vh)`;
        xr = i*67;
    }

    d.onclick = function(){
        if(i < (long - 1)){
          ++i;
        //   a.prepend(a.childNodes[0]);
        a.style.transition = `0.8s ease`;
        a.style.gridTemplateColumns = `repeat(${long},67vh)`;
        a.style.transform = `translateX(-${i*67}vh)`;
        }
        console.log(a.offsetWidth);
        console.log(i*67);
    }
        i = 1;

    a.ontransitionend = function(){
        if(lstcln.id === a.childNodes[i].id){
        i = long - 2;
        a.style.transition = `none`;
        a.style.transform = `translateX(-${i*67}vh)`;   
        }     

        if(frstcln.id === a.childNodes[i].id){
        i = 1;
        a.style.transition = `none`;
        a.style.transform = `translateX(-${i*67}vh)`;   
        }  
    }
}