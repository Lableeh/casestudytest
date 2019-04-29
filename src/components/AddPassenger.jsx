import React, { Component, Fragment } from "react";
import "../css/AddPassenger.css";
import  AddPassengerTables  from './AddPassengerTables';
import AddPassengerforms from "../components/AddPassengerforms"

class AddPassenger extends Component {
  constructor(props) {  
    super(props);
    
    this.state = {
        usersList: [
          {
            firstName: 'Avril',
            middleName: 'Ramona',
            lastName: 'Lavign',
            bDate: '09-24-1984'
          },
          {
            firstName: 'Billie',
            middleName: 'Joe',
            lastName: 'Armstrong',
            bDate: '02-17-1972'
          },
        
        ],
        user: {
          firstName: '',
          middleName: '',
          lastName: '',
          bDate: ''
        }
    };

    //this.handleAddUser2 = this.handleAddUser2.bind(this);
  }

  handleChangeInfo = e => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  handleAddUser = e => {

    let user = this.state.user;
    let usersList = [...this.state.usersList];

    usersList.push(user);

    this.setState({usersList : usersList});

    e.preventDefault();
  }

  handleAddUser2(e) {
    let user = this.state.user;
    let usersList = [...this.state.usersList];

    usersList.push(user);

    this.setState({usersList : usersList});

    e.preventDefault();
  }

  deleteUser = rowIndex => {

    let usersList = [...this.state.usersList];

    usersList.splice(rowIndex, 1);

    this.setState({usersList: usersList});
  }

  render() {

    return (

    
      <div className="body-wrapper">
      

      {/* Display Passenger Table */}
          <div className='forms-panel'>
            <AddPassengerforms
              handleChangeInfo={this.handleChangeInfo} 
              handleAddUser={this.handleAddUser} 
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
              <button type="button" className="button" onClick={this.props.handleAddUser}>Book</button>
            </div>
          </div>
          
          </form>
        </div>
      
          <br/>

          {/* Display Passenger Table */}
          <div className='table-panel'>
            <AddPassengerTables usersList={this.state.usersList} deleteUser={this.deleteUser} />
          </div>
        
        
        </div>
    );
  }
}

export default AddPassenger
