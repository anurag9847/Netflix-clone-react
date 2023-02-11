import React from "react";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/navbar/Navbar";
import "./components/navbar/Navbar.css"

import './App.css'
import {action,originals,romance} from './urls'
import Rowpost from "./components/Rowpost/Rowpost";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title = "Netflix Originals"/>
      <Rowpost url={action} title="Action" isSmall/>
      <Rowpost url={romance} title="Romance" isSmall/>
      
    </div>
  );
}

export default App;
