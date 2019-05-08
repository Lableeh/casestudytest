import React , {Component} from "react"
import PropTypes from 'prop-types';
import "../css/BookPassenger.css"

class BookPassengerforms extends Component{
    render(){
        return(
            <div className="bookPassenger-form-wrapper">
              
                <form>
                  <h3><center>Book Passenger</center></h3>
                  <br/>
                  <div className="row">
                    <div className="col-25">
                      <label>Flight ID: </label>
                    </div>
                  <div className="col-75">
                    <input 
                    type="text" 
                    name="pflightId" 
                    placeholder="Enter Your Flight ID" 
                    onChange={this.props.handleChangeBookPassengerInfo} 
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
                name="passengerId" 
                placeholder="Enter Your Passenger ID" 
                onChange={this.props.handleChangeBookPassengerInfo} 
              />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Class:</label>
              </div>
              <div className="col-75">
                <input 
                  type="text" 
                  list="flightClass" 
                  name="flightClass"
                  placeholder="Enter Flight Class" 
                  onChange={this.props.handleChangeBookPassengerInfo}
                />
                <datalist id="flightClass">
                  <option value="first" />
                  <option value="Business Class" />
                  <option value="Economy" />
                </datalist>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
              </div>
              <div className="col-75">
                <button type="button" className="button" onClick={this.props.handleAddBookPassenger}>Book</button>
              </div>
              </div>
          
          </form>
          
            </div>
        )
    }
}

BookPassengerforms.propTypes = {
    handleChangeBookPassengerInfo: PropTypes.func,
    handleAddBookPassenger: PropTypes.func
}

export default BookPassengerforms