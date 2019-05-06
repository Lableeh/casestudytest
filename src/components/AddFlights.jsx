import React, { Component , Fragment} from "react";
import "../css/AddFlight.css"
import AddFlightsforms from '../components/AddFlightsforms'
import AddFlightsTables from '../components/AddFlightsTables'
import airport from '../images/airport.jpg'
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

// (GET METHOD) DISPLAY INTIAL FLIGHT DATA
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
        <img src={airport} alt="Stewardess" width="550px" height="400px" className="airport"></img>
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