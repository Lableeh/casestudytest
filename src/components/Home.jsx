import React, { Component } from "react";
import ApLogo from "../images/airplane1.png"
import bg from "../images/home.jpg"
import "../css/Home.css"
 
class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
       <img src={bg} alt="Byaheng Langit" width="1355px" height="600px"></img>
        
      </div>
    );
  }
}
 
export default Home;