import React, {useState} from 'react';import './App.css';
// Importing All Components
import HeaderBar from'./Components/HeaderBar';
import MainInfoGrid from './Components/MainInfoGrid';
import RoughHeadings from'./Components/RoughHeadings';
import CountriesData from './Components/CountriesData';
import LineChart from './Components/Charts';


function App() {


  return (
    
 <div><HeaderBar/>
 <RoughHeadings/>
  <MainInfoGrid/>
  <div className="Heading">Countries Statistics</div>
   <CountriesData/>
   <hr></hr>
   <LineChart/>
   </div>
      
     
    
    
  );
}

export default App;
