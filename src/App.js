import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Nav from "./Component/Nav.js"
import Nasa from "./Pages/Nasa";
import Filter from "./Component/Filter"

import Imagen from "./Component/Imagen";



const App = ()=>{
  return(
    <div className="firstContainer">
        <Nav />   
        <Imagen />
        <Filter />
        <Nasa />

    </div>
    )
        
}


export default App;
