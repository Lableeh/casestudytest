import React, { Component , Fragment} from "react";
import "../css/AddFlight.css"
import AddFlightsforms from '../components/AddFlightsforms'
import airport from '../images/airport.jpg'
import axios from "axios";
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AddFlights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightList: [],
      editFlightData:{
   
        flightNum: "",
        flightOrigin: "",
        flightDestination: "",
        flightDepartureDT: "",
        flightArrivalDT: "",
        flightStatus: ""
      },
      editFlightModal: false
    };
  }

  componentWillMount() {
    this._refreshUsers();
  }

  toggleEditFlightModal() {
    this.setState({
      editFlightModal: ! this.state.editFlightModal
    });
  }

  updateFlight() {
    let { flightId, flightNum, flightOrigin, flightDestination, flightDepartureDT, flightArrivalDT, flightStatus} = this.state.editFlightData;
    console.log(this.state.editFlightData);
    axios.put('http://localhost:8080/restsample01/rest/flights' , {
      flightId,flightNum, flightOrigin, flightDestination, flightDepartureDT, flightArrivalDT, flightStatus
    })
    .then((response) => {
     
      this._refreshUsers();

      this.setState({
        editFlightModal: false, editFlightData: {flightId: '', flightNum: '', flightOrigin: '', flightDestination: '', flightDepartureDT:'', flightArrivalDT:'', flightStatus:''}
      })
    });
  }

  editFlight(flightId,flightNum, flightOrigin, flightDestination, flightDepartureDT, flightArrivalDT, flightStatus) {
    this.setState({
      editFlightData: { flightId,flightNum, flightOrigin, flightDestination, flightDepartureDT, flightArrivalDT, flightStatus }, editFlightModal: !this.state.editFlightModal
    });
  }

  _refreshUsers() {
    axios.get('http://localhost:8080/restsample01/rest/flights').then((response) => {
      this.setState({
        flightList: response.data
      })
    });
  }

// (GET METHOD) DISPLAY INITIAL FLIGHT DATA
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

        <Modal isOpen={this.state.editFlightModal} toggle={this.toggleEditFlightModal.bind(this)}>
          <ModalHeader toggle={this.toggleEditFlightModal.bind(this)}>Edit Flight details</ModalHeader>
            <ModalBody>
            
              <FormGroup>
                <Label for="flightNum">Flight Number</Label>
                <Input id="flightNum" value={this.state.editFlightData.flightNum} onChange={(e) => {
                  let { editFlightData } = this.state;
                  editFlightData.flightNum = e.target.value;
                  this.setState({ editFlightData });
                  }} 
                />
              </FormGroup>

              <FormGroup>
                <Label for="flightOrigin">Flight Origin</Label>
                <Input id="flightOrigin" value={this.state.editFlightData.flightOrigin} onChange={(e) => {
                  let { editFlightData } = this.state;
                  editFlightData.flightOrigin = e.target.value;
                  this.setState({ editFlightData });
                  }} 
                />
              </FormGroup>

              <FormGroup>
                <Label for="flightDestination">Flight Destination</Label>
                <Input id="flightDestination" value={this.state.editFlightData.flightDestination} onChange={(e) => {
                  let { editFlightData } = this.state;
                  editFlightData.flightDestination = e.target.value;
                  this.setState({ editFlightData });
                  }} 
                />
              </FormGroup>
            
              <FormGroup>
                <Label for="flightDepartureDT">Flight Departure Date/Time</Label>
                <Input id="flightDepartureDT" value={this.state.editFlightData.flightDepartureDT} onChange={(e) => {
                  let { editFlightData } = this.state;
                  editFlightData.flightDepartureDT = e.target.value;
                  this.setState({ editFlightData });
                  }} 
                />
              </FormGroup>

              <FormGroup>
                <Label for="flightArrivalDT">Flight Arrival Date/Time</Label>
                <Input id="flightArrivalDT" value={this.state.editFlightData.flightArrivalDT} onChange={(e) => {
                  let { editFlightData } = this.state;
                  editFlightData.flightArrivalDT = e.target.value;
                  this.setState({ editFlightData });
                  }} 
                />
              </FormGroup>

              <FormGroup>
                <Label for="flightStatus">Flight Status</Label>
                <Input type="text" id="flightStatus" value={this.state.editFlightData.flightStatus} onChange={(e) => {
                  let { editFlightData } = this.state;
                  editFlightData.flightStatus = e.target.value;
                  this.setState({ editFlightData });
                  }} 
                />
              </FormGroup>

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.updateFlight.bind(this)}>Update User</Button>{' '}
              <Button color="secondary" onClick={this.toggleEditFlightModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Table className='flight-table'>
            <thead>
              <tr className='flight-table-head'>
                <th className='flight-table-cell'>FLIGHT ID</th>
                <th className='flight-table-cell'>FLIGHT NUM</th>
                <th className='flight-table-cell'>FLIGHT ORIGIN</th>
                <th className='flight-table-cell'>FLIGHT DESTINATION</th>
                <th className='flight-table-cell'>FLIGHT DEPARTURE DATE/TIME</th>
                <th className='flight-table-cell'>FLIGHT ARRIVAL DATA/TIME</th>
                <th className='flight-table-cell'>FLIGHT STATUS</th>
                <th className='flight-table-cell'>Action</th>
              </tr>
              </thead>
              <tbody>
                {
                  this.state.flightList.map((flight) => {
                    return(
                      <tr className='flight-table-row' key ={flight.flightId}>
                      <th className='flight-table-cell'>{flight.flightId} </th>
                      <th className='flight-table-cell'>{flight.flightNum} </th>
                      <th className='flight-table-cell'> {flight.flightOrigin}</th>
                      <th className='flight-table-cell'> {flight.flightDestination}</th>
                      <th className='flight-table-cell'> {flight.flightDepartureDT}</th>
                      <th className='flight-table-cell'> {flight.flightArrivalDT}</th>
                      <th className='flight-table-cell'> {flight.flightStatus}</th>
                      <Button color="success" size="sm" className="mr-2" onClick={this.editFlight.bind(this, flight.flightId, flight.flightNum, flight.flightOrigin,
                      flight.flightDestination, flight.flightDepartureDT, flight.flightArrivalDT, flight.flightStatus)}>Edit</Button>
                      </tr>
                      )
                    }
                  )
                }
              </tbody>
          </Table>
      </div>
    
    );
  }
}

export default AddFlights;