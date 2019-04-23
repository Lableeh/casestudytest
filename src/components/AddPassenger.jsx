import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import "../css/AddPassenger.css";

class AddPassenger extends Component {
  render() {
    return (
      <div className="body-wrapper">
      <div className='form-wrapper'> 
        <form>
          <h2><center>Add Passenger</center></h2>
          <br/>
          <div className="row">
            <div className="col-25">
              <p><bold>Passenger ID: C0011</bold></p>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>First Name: </label>
            </div>
            <div className="col-75">
              <input 
                type="text" 
                name="Fname" 
                placeholder="Enter Your First Name" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Middle Name: </label>
            </div>
            <div className="col-75">
              <input 
                type="text" 
                name="Mname" 
                placeholder="Enter Your Middle Name" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Last Name:</label>
            </div>
            <div className="col-75">
              <input 
              type="text" 
              name="Lname" 
              placeholder="Enter Your Last Name" 
              onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-25">
              <label>Birth Date: </label>
            </div>

            <div className="col-75">
              <input 
                type="date" 
                name="Bdate" 
                placeholder="Enter Your Birthdate" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>  

          <div className="row">
            <div className="col-25">
            </div>
            <div className="col-75">
              <button type="button" className="button" onClick={this.props.handleAddUser}>Add</button>
            </div>
          </div>
        </form>      
      </div>
        
        <div className="form-wrapper">
          <form>
          <h2><center>Book Passenger</center></h2>
          <br/>
            <div className="row">
              <div className="col-25">
                <label>Flight ID: </label>
              </div>
            <div className="col-75">
              <input 
                type="text" 
                name="FlightID" 
                placeholder="Enter Your Flight ID" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
              <div className="col-25">
                <label>Passenger ID: </label>
              </div>
            <div className="col-75">
              <input 
                type="text" 
                name="PassengerID" 
                placeholder="Enter Your Passenger ID" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Destination:</label>
            </div>
            <div className="col-75">
              <input type="text" list="destination" placeholder="Enter Your Destination"/>
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
              <label>Flight Date/Time: </label>
            </div>
            <div className="col-75">
              <input 
                type="date" 
                name="FlightDT" 
                placeholder="Enter Flight Date and Time" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>    
          </div>

          <div className="row">
            <div className="col-25">
              <label>Class:</label>
            </div>
            <div className="col-75">
              <input type="text" list="class-type" placeholder="Select Class"/>
                <datalist id="class-type">
                  <option value="First" />
                  <option value="Business Class" />
                  <option value="Economy" />
                </datalist>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
            </div>
            <div className="col-75">
              <button type="button" className="button" onClick={this.props.handleAddUser}>Book</button>
            </div>
          </div>
          
          </form>
        </div>
        </div>
    );
  }
}

{/* // Forms.propTypes = {
//   handleChangeInfo: PropTypes.func,
//   handleAddUser: PropTypes.func
// } */}

export default AddPassenger
