import React, { Component , Fragment} from "react";
import "../css/AddFlight.css"
import PropTypes from 'prop-types';

class AddFlights extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     flightList: [
  //       {
  //         flightID: "F001",
  //         flightNum: "000001",
  //         origin: "Manila",
  //         destination: "Boracay",
  //         departureDT: "23-04-2019 (9:00AM)",
  //         arrivalDT: "23-04-2019 (1:00PM)",
  //         fStatus: "Ready"
  //       },
  //       {
  //         flightID: "F002",
  //         flightNum: "000002",
  //         origin: "Manila",
  //         destination: "Cebu",
  //         departureDT: "25-04-2019 (7:00AM)",
  //         arrivalDT: "25-04-2019 (1:00PM)",
  //         fStatus: "Ready"
  //       }
  //     ],
  //     flight: {
  //       flightID: "",
  //       flightNum: "",
  //       origin: "",
  //       destination: "",
  //       departureDT: "",
  //       arrivalDT: "",
  //       fStatus: ""
  //     }
  //   };
  // }

  // handleChangeInfo = e => {
  //   const {name, value} = e.target;

  //   this.setState((prevState) => ({
  //     flight: {
  //       ...prevState.flight,
  //       [name]: value
  //     }
  //   }));
  // }

  
  // handleAddFlight = e => {

  //   let flight = this.state.flight;
  //   let flightList = [...this.state.flightList];

  //   flightList.push(flight);

  //   this.setState({flightList : flightList});

  //   e.preventDefault();
  // }

  // handleAddFlight2(e) {
  //   let flight = this.state.flight;
  //   let flightList = [...this.state.flightList];

  //   flightList.push(flight);

  //   this.setState({flightList : flightList});

  //   e.preventDefault();
  // }

  // deleteUser = rowIndex => {

  //   let flightList = [...this.state.flightList];

  //   flightList.splice(rowIndex, 1);

  //   this.setState({flightList: flightList});
  // }


  render() {
    return (

      <div className="body-wrapper">
        <div className="form-wrapper">
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
          
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Origin:</label>
              </div>
              <div className="col-75">
                <input type="text" list="destination" name="origin" placeholder="Enter Your Origin" />
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
                <input type="text" list="destination" name="destination" placeholder="Enter your destination" />
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
              
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">

              </div>
              <div className="col-75">
                <button type="button" className="book-button" >Add</button>
              </div>
            </div>
          </form>
        </div>

        <div className="form-wrapper">

            <h2><center>Flight Information</center></h2>
            <br />
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