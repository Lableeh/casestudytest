import React, { Component , Fragment} from "react";
import "../css/BookPassenger.css"
import BookPassengerforms from '../components/BookPassengerforms'
import BookPassengerTables from '../components/BookPassengerTables'
import axios from "axios";

class BookPassenger extends Component{
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

// (GET METHOD) DISPLAY INITIAL BOOKED PASSENGER DATA
getPassengers(){
    axios.get(`http://localhost:8080/restsample01/rest/passengers`)
      .then(res => {
          const flightList = res.data;
          this.setState({flightList:flightList});
        })
  }

  componentDidMount(){
    this.getPassengers();
  }

  handleChangeBookPassengerInfo = e => {
    const {name, value} = e.target;
    this.setState((prevState) => ({
      flight: {
        ...prevState.flight,
        [name]: value
      }
    }));
  }

  // (POST METHOD) ADD FLIGHTS
  handleAddBookPassenger = e => {
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
  axios.post(`http://localhost:8080/restsample01/rest/passengers`,flight, {headers:headers})
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
}

// (DELETE METHOD)
deleteBookPassenger = rowIndex => {
    let flightList = [...this.state.flightList];
    flightList.splice(rowIndex, 1);
    this.setState({flightList: flightList});

    axios.delete(`http://localhost:8080/restsample01/rest/passengers/${rowIndex}`)
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
  }
      
    render(){
        return(
            <div className = "bookPassenger-wrapper">
        
            <div className='forms-panel'>
                <BookPassengerforms
                    handleChangeBookPassengerInfo={this.handleChangeBookPassengerInfo} 
                    handleAddBookPassenger={this.handleAddBookPassenger} 
                />
            </div>

            {/* Display Flight Table */}
            <div className='flight-table-panel'>
                <BookPassengerTables flightList={this.state.flightList} deleteFlight={this.deleteBookPassenger} />
            </div>
            </div>
        )
    }
}

export default BookPassenger