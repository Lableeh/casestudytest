import React, { Component } from "react";
import "../css/AddFlight.css" 

class AddFlights extends Component {
  render() {
    return (
      <div className="body-wrapper">
      <div className="form-wrapper">
        <h2><center>Add Flight</center></h2>
        <br/>
        <form>
          <div className="row">
            <div className="col-25">
              <label>Flight Number: </label>
            </div>
            <div className="col-75">
              <input 
                type="text" 
                name="Flight-number" 
                placeholder="Enter Your Flight Number" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Origin:</label>
            </div>
            <div className="col-75">
              <input type="text" list="destination" placeholder="Enter Your Origin"/>
                <datalist id="destination">
                  <option value="Manila" />
                  <option value="Boracay (caticlan)" />
                  <option value="Cebu" />
                  <option value="Coron" />
                  <option value="Davao" />
                  <option value="Puerta Prinsesa" />
                  <option value="Surigao" />
                </datalist>
            </div> 
          </div>

          <div className="row">
            <div className="col-25">
              <label>Destination:</label>
            </div>
            <div className="col-75">
              <input type="text" list="destination" placeholder="Enter your destination"/>
                <datalist id="destination">
                  <option value="Manila" />
                  <option value="Boracay (caticlan)" />
                  <option value="Cebu" />
                  <option value="Coron" />
                  <option value="Davao" />
                  <option value="Puerta Prinsesa" />
                  <option value="Surigao" />
                </datalist>
            </div>
          </div>
            
          <div className="row">
            <div className="col-25">
              <label>Departure Date/Time: </label>
            </div>
            <div className="col-75">
              <input 
                type="date" 
                name="DepartureDT" 
                placeholder="Enter Your Departure Date and Time" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>    
          </div>
          

          <div className="row">
            <div className="col-25">
              <label>Arrival Date/Time:</label>
            </div>
            <div className="col-75">
              <input 
                type="date" 
                name="ArrivalDT" 
                placeholder="Enter Your Arrival Date and Time" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Status:</label>
            </div>
            <div className="col-75">
              <input 
                type="text" 
                name="FStatus" 
                placeholder="Enter Your Flight Status" 
                onChange={this.props.handleChangeInfo} 
              />
          </div>
        </div>
          <div className="row">
            <div className="col-25">

            </div>
            <div className="col-75">
              <button type="button" className="book-button" onClick={this.props.handleAddUser}>Add</button>
            </div>
          </div>   
      </form>
      </div>

      <div className="form-wrapper">
          <h2><center>Flight Information</center></h2>
          <br/>
          <p>Flight Number: </p>
          <p>Origin: </p>
          <p>Departure Date/Time: </p>
          <p>Arrival Date/Time: </p>
          <p>Status: </p>
        </div>
    </div>
    );
  }
}
 
export default AddFlights;