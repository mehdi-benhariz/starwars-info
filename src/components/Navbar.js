import React from 'react';
const {MDBBtn} = require('mdbreact');

const Navbar = ({setpage}) => {
    return ( 
        <nav>
<MDBBtn gradient="purple" onClick={(e)=>setpage('Planets')} >Planets</MDBBtn>
<MDBBtn gradient="peach" onClick={(e)=>setpage('People')} >Peoples</MDBBtn>

        </nav>
     );
}
 
export default Navbar;