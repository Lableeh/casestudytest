import React, { Component , Fragment} from "react";
import "../css/AddFlight.css"
import AddFlightsforms from '../components/AddFlightsforms'
import AddFlightsTables from '../components/AddFlightsTables'
import axios from "axios";


class AddFlights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightList: [],
      flight: {
        flightId: "",
        flightNum: "",
        flightOrigin: "",
        flightDestination: "",
        flightDepartureDT: "",
        flightArrivalDT: "",
        flightStatus: ""
      }
    };
  }

// (GET METHOD) GET FLIGHT DATA
getFlights(){
  axios.get(`http://localhost:8080/restsample01/rest/flights`)
    .then(res => {
        const flightList = res.data;
        this.setState({flightList:flightList});
      })
}

componentDidMount(){
  this.getFlights();
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

  // (POST METHOD) ADD FLIGHTS
  handleAddFlight = e => {
    let flight = this.state.flight;
    let flightList = [...this.state.flightList];
    flightList.push(flight);
    this.setState({flightList : flightList});
    e.preventDefault();
    console.log("post");
    console.log(flight);
    let headers = {
      'Content-Type': 'application/json',
  }
  axios.post(`http://localhost:8080/restsample01/rest/flights`,flight, {headers:headers})
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
}

 

  // (DELETE METHOD)
  deleteFlight = rowIndex => {
    let flightList = [...this.state.flightList];
    flightList.splice(rowIndex, 1);
    this.setState({flightList: flightList});

    axios.delete(`http://localhost:8080/restsample01/rest/flights/${rowIndex}`)
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
  }

  // (DELETE METHOD)
  editFlight = rowIndex => {
    let flightList = [...this.state.flightList];
    flightList.splice(rowIndex, 1);
    this.setState({flightList: flightList});

    axios.put(`http://localhost:8080/restsample01/rest/flights/${rowIndex}`)
    
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
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
              <input type="text" list="destination" placeholder="Enter Your Destination" onChange={this.props.handleChangeInfo}/>
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
                type="datetime-local" 
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
              <input type="text" list="class-type" placeholder="Select Class" onChange={this.props.handleChangeInfo}/>
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
              <button type="button" className="button" onClick={this.props.handleAddPassenger}>Book</button>
            </div>
          </div>
          
          </form>
        </div>

          
          {/* Display Flight Table */}
          <div className='flight-table-panel'>
            <AddFlightsTables flightList={this.state.flightList} deleteFlight={this.deleteFlight} />
          </div>
      </div>
    
    );
  }
}

export default AddFlights;