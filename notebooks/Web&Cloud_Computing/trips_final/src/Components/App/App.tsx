import React from 'react';
import './App.css';
import Clock from '../Clock/Clock'
import ToDoList from '../ToDoList/ToDoList'
import logo from "./logo1.jpg"
import MapContainer from "../Map/Map"
import Chart from "../Chart/Chart"


function App() {
  return (
    <div>
      
      <header> <img src={logo} alt="Car Logo" width='80px;'/> Fast Trips Dashboard <Clock/></header>
      
      <div className="Inline">

        {/* <div className="Map"><MapContainer /></div> */}
        <div className='Chart'><Chart/></div>

      </div>
      <section><ToDoList/></section>
      
      <footer>This is a footer</footer>
    </div>

  );
}

export default App;
