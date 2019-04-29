import React , {Component} from "react"
import PropTypes from 'prop-types';
import "../css/AddFlight.css"

class AddFlightsforms extends Component{
    render(){
        return(
          <div className="flight-form-wrapper">
          <h2><center>Add Flight</center></h2>
          <br />
          <form>
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
                  name="origin"
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
                  name="destination" 
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
                  type="date"
                  name="departureDT"
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
                  type="date"
                  name="arrivalDT"
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
                  name="fStatus"
                  placeholder="Enter Your Flight Status"
                  onChange={this.props.handleChangeFlightInfo}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">

              </div>
              <div className="col-75">
                <button type="button" className="book-button" onClick={this.props.handleAddFlight}>Add</button>
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