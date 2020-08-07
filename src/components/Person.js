import React from 'react';
import {MDBCard} from 'mdbreact';


const Person = ({person,setDetails,details}) => {
    return (
        <div>
            <MDBCard personal >
            <h3 >
                {person.name} </h3>
            <p>Gender - { person.gender }</p>
      <p>Birth year - { person.birth_year }</p>
            </MDBCard>

        </div>
      );
}
 
export default Person;