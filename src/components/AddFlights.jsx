import React, { Component , Fragment} from "react";
import "../css/AddFlight.css"
import AddFlightsforms from '../components/AddFlightsforms'
import AddFlightsTables from '../components/AddFlightsTables'

class AddFlights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightList: [
        {
          flightID: "F001",
          flightNum: "000001",
          origin: "Manila",
          destination: "Boracay",
          departureDT: "23-04-2019 (9:00AM)",
          arrivalDT: "23-04-2019 (1:00PM)",
          fStatus: "Ready"
        },
        {
          flightID: "F002",
          flightNum: "000002",
          origin: "Manila",
          destination: "Cebu",
          departureDT: "25-04-2019 (7:00AM)",
          arrivalDT: "25-04-2019 (1:00PM)",
          fStatus: "Ready"
        }
      ],
      flight: {
        flightID: "",
        flightNum: "",
        origin: "",
        destination: "",
        departureDT: "",
        arrivalDT: "",
        fStatus: ""
      }
    };
  }

  handleChangeFlightInfo = e => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      flight: {
        ...prevState.flight,
        [name]: value
      }
    }));
  }

  
  handleAddFlight = e => {

    let flight = this.state.flight;
    let flightList = [...this.state.flightList];

    flightList.push(flight);

    this.setState({flightList : flightList});

    e.preventDefault();
  }

  handleAddFlight2(e) {
    let flight = this.state.flight;
    let flightList = [...this.state.flightList];

    flightList.push(flight);

    this.setState({flightList : flightList});

    e.preventDefault();
  }

  deleteUser = rowIndex => {

    let flightList = [...this.state.flightList];

    flightList.splice(rowIndex, 1);

    this.setState({flightList: flightList});
  }


  render() {
    return (

      <div className="body-wrapper">
        
        <div className='forms-panel'>
            <AddFlightsforms
              handleChangeFlightInfo={this.handleChangeFlightInfo} 
              handleAddFlight={this.handleAddFlight} 
            />
          </div>

        <div className="flight-form-wrapper">

            <h2><center>Flight Information</center></h2>
            <br />
            <p>Flight Number: </p>
            <p>Origin: </p>
            <p>Departure Date/Time: </p>
            <p>Arrival Date/Time: </p>
            <p>Status: </p>       
  
        </div>

          
          {/* Display Flight Table */}
          <div className='flight-table-panel'>
            <AddFlightsTables flightList={this.state.flightList} deleteUser={this.deleteUser} />
          </div>
      </div>
    
    );
  }
}

export default AddFlights;