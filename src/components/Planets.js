import React, { useState } from 'react';
import { usePaginatedQuery} from 'react-query';
import Planet from './Planet';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import DetailPlanet from './DetailPlanet';

const fetchPlanets =async(key,page)=>{
   const  res = await fetch(`https://swapi.dev/api/planets/?page=${page} `);
   return res.json();
}
const Planets = ({details,setDetails}) => {
const [page, setpage] = useState(1);
const {
  resolvedData,
  latestData,
  status
} =  usePaginatedQuery(["Planets",page],fetchPlanets,{
    staleTime:2000,
    cacheTime:50000,
})

const getLast =()=>setpage(Math.trunc(resolvedData.count /resolvedData.results.length)) ;

const paggination =    
<div id="paggination" >
<MDBRow>
<MDBCol>
  <MDBPagination circle color="amber"id="paggination" >
    <MDBPageItem >
      <MDBPageNav className="page-link" onClick={()=>setpage(1)} >
        First
      </MDBPageNav>
    </MDBPageItem>
    <MDBPageItem >
      <MDBPageNav className="page-link" aria-label="Previous"  onClick={()=>setpage(old=>Math.max(old -1,1) )} >
        <span aria-hidden="false">&laquo;</span>
        <span className="sr-only">Previous</span>
      </MDBPageNav>
    </MDBPageItem>
    <MDBPageItem   active >
      <MDBPageNav className="page-link"  >
        {page} 
      </MDBPageNav>
    </MDBPageItem>
    <MDBPageItem>
      <MDBPageNav className="page-link" onClick={()=>setpage(old=>(!latestData ||!latestData.next ? old:old+1)  )} >
        &raquo;
      </MDBPageNav>
    </MDBPageItem>
    <MDBPageItem>
      <MDBPageNav className="page-link" onClick={getLast} >
        Last
      </MDBPageNav>
    </MDBPageItem>
  </MDBPagination>
</MDBCol>
</MDBRow>
</div> 

    return ( 
        <div>
          {details.isOn && <DetailPlanet details={details} /> }
        {status === "error" && !details.isOn &&(<div> error</div>) }
        {status === "loading" && !details.isOn &&(<div> loading....</div>) }
        {status === "success" && !details.isOn &&(<div> 
          { resolvedData.results.map(planet => 
          <div key={planet.name}   
           onClick={()=>setDetails({isOn:true,index :planet.url.charAt(planet.url.length-2) }) }>
          <Planet planet={planet} />
          </div>
 ) }

           {paggination}
        </div>) }
        
        </div>
     );
}
 
export default Planets;