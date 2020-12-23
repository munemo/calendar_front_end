import React, { Component } from "react";
//import Login from "./components/Login";
//import Register from "./components/Register";
//import Home from "./components/Home";
import "../src/css/Scheduler/scheduler.css";
import Scheduler from "./components/Scheduler";

const data = [
  {
    start_date: "2020-01-04 6:00",
    end_date: "2020-07-12",
    text: "Event 1",
    id: 1,
  },
  {
    start_date: "2020-01-04 6:00",
    end_date: "2020-07-12",
    text: "Event 2",
    id: 2,
  },
];

function App() {
  return (
    <div className="App">
      <div className="scheduler-container">
      
        <Scheduler events={data}/>
          
      
      </div>
    </div>
  );
}

export default App;
