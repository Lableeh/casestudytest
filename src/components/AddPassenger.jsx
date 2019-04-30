import React, { Component, Fragment } from "react";
import "../css/AddPassenger.css";
import  AddPassengerTables  from './AddPassengerTables';
import AddPassengerforms from "../components/AddPassengerforms";
import axios from "axios";

class AddPassenger extends Component {
  constructor(props) {  
    super(props);
    
    this.state = {
        passengerList: [],
        passenger: {
          id: '',
          firstName: '',
          middleName: '',
          lastName: '',
          birthDate: ''
        }
    };
  }

// (GET METHOD) GET PASSENGER DATA
getPassengers(){
  axios.get(`http://localhost:8080/restsample01/rest/users`)
    .then(res => {
        const passengerList = res.data;
        this.setState({passengerList:passengerList});
      })
}

componentDidMount(){
  this.getPassengers();
}

handleChangeInfo = e => {
  const {name, value} = e.target;
  this.setState((prevState) => ({
    passenger: {
      ...prevState.passenger,
      [name]: value
    }
    }));
  }

  // (POST METHOD) ADD PASSENGER
  handleAddPassenger = e => {
    let passenger = this.state.passenger;
    let passengerList = [...this.state.passengerList];
    passengerList.push(passenger);
    this.setState({passengerList : passengerList});
    e.preventDefault();
    console.log("post");
    console.log(passenger);
    let headers = {
      'Content-Type': 'application/json',
    }

    axios.post(`http://localhost:8080/restsample01/rest/users`,passenger, {headers:headers})
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
  }

  // (DELETE METHOD)
  deletePassenger = rowIndex => {
    let passengerList = [...this.state.passengerList];
    passengerList.splice(rowIndex, 1);
    this.setState({passengerList: passengerList});

    axios.delete(`http://localhost:8080/restsample01/rest/users/${rowIndex}`)
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
  }

  render() {

    return (

    
      <div className="body-wrapper">
      

      {/* Display Passenger Table */}
          <div className='forms-panel'>
            <AddPassengerforms
              handleChangeInfo={this.handleChangeInfo} 
              handleAddPassenger={this.handleAddPassenger} 
            />
          </div>
          
          {/* Book Passenger */}
          <div className="passenger-form-wrapper">
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
      
          <br/>

          {/* Display Passenger Table */}
          <div className='table-panel'>
            <AddPassengerTables passengerList={this.state.passengerList} deletePassenger={this.deletePassenger} />
          </div>
        
        
        </div>
    );
  }
}

export default AddPassenger
