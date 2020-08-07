import React from 'react';
import { usePaginatedQuery} from 'react-query';

const fetchPeople = async (key,index) => {
    const res = await fetch(`https://swapi.dev/api/people/${index}`);
    return res.json();
  }
const DetailPerson = ({details}) => {
    const {  resolvedData,
        latestData,
        status  } =  usePaginatedQuery(["People",details.index],fetchPeople  );
            return (  
                <div>
                {status === "success" && (
                    <div >
                    <h2 id="details" >details: </h2>
                    <h3  >Name : <span>{resolvedData.name}</span> </h3>
                    <h3  >Height : <span>{resolvedData.height}</span> </h3>
                    <h3  >Mass : <span>{resolvedData.mass}</span> </h3>
                    <h3  >Gender : <span>{resolvedData.gender}</span> </h3>

                </div>
                )}
       
                </div>

    );
}
 
export default DetailPerson;