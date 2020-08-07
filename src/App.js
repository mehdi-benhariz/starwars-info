import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import {ReactQueryDevtools} from 'react-query-devtools';


function App() {
  const [page, setpage] = useState("Planets");
  const [details, setDetails] = useState({
    isOn:false,
    index :""
  })

  return (
    <div className="App">
      <h1 onClick={()=>setDetails({isOn:false,index:"" })} >StarWars Info </h1>

    <div>
    <Navbar setpage={setpage} setDetails={setDetails} />
        <div className="content" >
        {page === "Planets" ? <Planets details={details} setDetails={setDetails} /> :
            <People details={details} setDetails={setDetails}  /> }
        <ReactQueryDevtools initialIsOpen={false}/>
        </div>
    </div> 
    </div>
  );
}

export default App;
