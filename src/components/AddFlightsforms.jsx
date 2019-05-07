import React , {Component} from "react"
import PropTypes from 'prop-types';
import "../css/AddFlight.css"

class AddFlightsforms extends Component{
    render(){
        return(
          <div className="flight-form-wrapper">
          <h2><center>Add Flight</center></h2>
          <br />
          <form className = "flight-form">
            <div className="row">
              <div className="col-25">
                <label>Flight Number: </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="flightNum"
                  placeholder="Enter Your Flight Number"
                  onChange={this.props.handleChangeFlightInfo}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Origin:</label>
              </div>
              <div className="col-75">
                <input 
                  type="text" 
                  list="destination" 
                  name="flightOrigin"
                  placeholder="Enter Your Origin" 
                  onChange={this.props.handleChangeFlightInfo}
                />
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
                <input 
                  type="text" 
                  list="destination" 
                  name="flightDestination" 
                  placeholder="Enter your destination" 
                  onChange={this.props.handleChangeFlightInfo}
                />
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
                  type="datetime-local"
                  name="flightDepartureDT"
                  placeholder="Enter Your Departure Date and Time"
                  onChange={this.props.handleChangeFlightInfo}
                />
              </div>
            </div>


            <div className="row">
              <div className="col-25">
                <label>Arrival Date/Time:</label>
              </div>
              <div className="col-75">
                <input
                  type="datetime-local"
                  name="flightArrivalDT"
                  placeholder="Enter Your Arrival Date and Time"
                  onChange={this.props.handleChangeFlightInfo}
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
                  list="flightStatus" 
                  name="flightStatus" 
                  placeholder="Enter Flight Status" 
                  onChange={this.props.handleChangeFlightInfo}
                />
                <datalist id="flightStatus">
                  <option value="Cancelled" />
                  <option value="Scheduled" />
                  <option value="Gate Open" />
                  <option value="Boarding" />
                  <option value="Gate Closed" />
                  <option value="On Time" />
                  <option value="Delayed" />
                  <option value="Early" />
                  <option value="Arrived" />
                </datalist>
              </div>
            </div>
            <div className="row">
              <div className="col-25">

              </div>
              <div className="col-75">
                <button 
                  type="button" 
                  className="book-button" 
                  onClick={this.props.handleAddFlight}>
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
            
        )
    }
}

AddFlightsforms.propTypes = {
    handleChangeFlightInfo: PropTypes.func,
    handleAddFlight: PropTypes.func
}

export default AddFlightsforms