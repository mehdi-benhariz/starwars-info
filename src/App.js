import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from '../components/People';

function App() {
  const [page, setpage] = useState("Planets");
  return (
    <div className="App">
      <h1>StarWars Info </h1>
       <Navbar setpage={setpage} />
      <div className="content" ></div>
      {page === "Planets"?<Planets/> : <People/> }
    </div>
  );
}

export default App;
