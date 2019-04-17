import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./components/Home";
  import Bookings from "./components/Bookings";
  import Flights from "./components/Flights";
  

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
        
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Bookings">Manage Booking</NavLink></li>
            <li><NavLink to="/Flights">Flight Status</NavLink></li>
            <li><NavLink to="/Flights">About Us</NavLink></li>
            <li><NavLink to="/Flights">Contact Us</NavLink></li>          
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Bookings" component={Bookings}/>
            <Route path="/Flights" component={Flights}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;