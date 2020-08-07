import React from 'react';
const {MDBBtn} = require('mdbreact');

const Navbar = ({setpage,setDetails}) => {
    return ( 
        <nav>
<MDBBtn gradient="peach" onClick={()=>{
    setpage('Planets');setDetails({isOn:false,index:"" })}}  rounded id="btn" >
        Planets</MDBBtn>
<MDBBtn gradient="peach" onClick={()=>{
    setpage('People');setDetails({isOn:false,index:"" })}} rounded id="btn" >
        Peoples</MDBBtn>

        </nav>
     );
}
 
export default Navbar;