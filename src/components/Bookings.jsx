import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import "../css/bookings.css";

class Bookings extends Component {
  render() {
    return (
      <div className='form-wrapper'>


        <Fragment>
          <form>

            <div className="row">
              <div className="col-25">
                <label>First Name: </label>
              </div>
              <div className="col-75">
                <input type="text" name="Fname" placeholder="Enter Your First Name" onChange={this.props.handleChangeInfo} />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Middle Name: </label>
              </div>
              <div className="col-75">
                <input type="text" name="Mname" placeholder="Enter Your Middle Name" onChange={this.props.handleChangeInfo} />
              </div>
            </div>

            Last Name: <br /> <input type="text" name="Lname" placeholder="Enter Your Last Name" onChange={this.props.handleChangeInfo} /><br />



            Birth Date: <br /> <input type="date" name="Bdate" placeholder="Enter Your Birthdate" onChange={this.props.handleChangeInfo} /><br />
            Flight Number: <br /> <input type="text" name="Flight-number" placeholder="Enter Your Flight Number" onChange={this.props.handleChangeInfo} /><br />








            <label>
              Origin<br />
              <input type="text" list="destination" />
              <datalist id="destination">
                <option value="Manila" />
                <option value="Boracay (caticlan)" />
                <option value="Cebu" />
                <option value="Coron" />
                <option value="Davao" />
                <option value="Puerta Prinsesa" />
                <option value="Surigao" />
              </datalist>
            </label>  <br />

            <label>
              Destination<br />
              <input type="text" list="destination" />
              <datalist id="destination">
                <option value="Manila" />
                <option value="Boracay (caticlan)" />
                <option value="Cebu" />
                <option value="Coron" />
                <option value="Davao" />
                <option value="Puerta Prinsesa" />
                <option value="Surigao" />
              </datalist>
            </label>  <br />


            Departure Date/Time: <br /> <input type="date" name="DepartureDT" placeholder="Enter Your Departure Date and Time" onChange={this.props.handleChangeInfo} /><br />
            Arrival Date/Time: <br /> <input type="date" name="ArrivalDT" placeholder="Enter Your Arrival Date and Time" onChange={this.props.handleChangeInfo} /><br />
            Status: <br /> <input type="text" name="FStatus" placeholder="Enter Your Flight Status" onChange={this.props.handleChangeInfo} /><br />

            <br />
            <button type="button" onClick={this.props.handleAddUser}>Submit</button>
          </form>

        </Fragment>
      </div>
    );
  }
}

{/* // Forms.propTypes = {
//   handleChangeInfo: PropTypes.func,
//   handleAddUser: PropTypes.func
// } */}

export default Bookings;
