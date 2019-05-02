import React, { Component, Fragment } from "react";
import "../css/AddPassenger.css";
import  AddPassengerTables  from './AddPassengerTables';
import AddPassengerforms from "../components/AddPassengerforms";
import axios from "axios";
import stewardess from "../images/stewardess.jpg"
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
          
 
          <div className="passenger-form-wrapper">
         <img src={stewardess} alt="Stewardess" width="550px" height="360px" className="stewardess"></img>
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
