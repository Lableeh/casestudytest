import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./components/Home";
import AddPassenger from "./components/AddPassenger";
import AddFlights from "./components/AddFlights";
import SearchFlights from "./components/SearchFlights";


class Main extends Component {
  render() {
    
    return (
        <HashRouter>
        <div>
        
          <ul className="header">
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/AddPassenger">Add/Book Passenger</NavLink></li>
            <li><NavLink to="/AddFlights">Add Flights</NavLink></li>
            <li><NavLink to="/SearchFlights">Search Flights</NavLink></li>        
          </ul>
          <div className="content">
            <Route exact path="/Home" component={Home}/>
            <Route path="/AddPassenger" component={AddPassenger}/>
            <Route path="/AddFlights" component={AddFlights}/>
            <Route path="/SearchFlights" component={SearchFlights}/>
           
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;