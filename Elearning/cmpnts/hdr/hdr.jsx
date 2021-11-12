import React from 'react';
import Nv from '../nv&ftr/nv';
import Ftr from '../nv&ftr/ftr';
import Header from './header';
import Bnr from '../bnr/bnr';
import Bnrsldr from '../bnrsldr/bnrsldr';
import Cmnt from '../bnrcmnt/cmnt';
import Ctgrs from '../ctgrs/ctgrs';
import './hdr.css';

export default function Hdr(){
    return(
		<div>
<Nv />
<Header />
<Bnr />
<Bnrsldr />
<Cmnt />
<Ctgrs />
<Ftr />
</div>
    );

}