import React from 'react';
import {MDBCard} from 'mdbreact';

const Planet = ({planet}) => {
    return (
        <div>
            <MDBCard news >
            <h3>{planet.name} </h3>
            <p>terrain: {planet.terrain} </p>
            <p>population: {planet.population} </p>
            </MDBCard>

        </div>
      );
}
 
export default Planet;