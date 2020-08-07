import React from 'react';
import { usePaginatedQuery} from 'react-query';

const fetchPeople = async (key,index) => {
    const res = await fetch(`https://swapi.dev/api/planets/${index}`);
    return res.json();
  }
const DetailPerson = ({details}) => {
    const {  resolvedData,
        latestData,
        status  } =  usePaginatedQuery(["Planet",details.index],fetchPeople  );
            return (  
                <div>
                {status === "success" && (
                    <div >
                    <h2 id="details" >details: </h2>
                    <h3  >Name : <span>{resolvedData.name}</span> </h3>
                    <h3  >Diameter : <span>{resolvedData.diameter}</span> </h3>
                    <h3  >Climate : <span>{resolvedData.climate}</span> </h3>
                    <h3  >Terrain : <span>{resolvedData.terrain}</span> </h3>
                    <h3  >Population : <span>{resolvedData.population}</span> </h3>

                </div>
                )}
       
                </div>

    );
}
 
export default DetailPerson;