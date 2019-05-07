import React, { Component , Fragment} from "react";
import "../css/BookPassenger.css"
import BookPassengerforms from '../components/BookPassengerforms'
import BookPassengerTables from '../components/BookPassengerTables'
import axios from "axios";

class BookPassenger extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          bookPassengerList: [],
          bookPassenger: {
            bookId: "",
            pflightId: "",
            passengerId: "",
            flightClass: ""
          } 
        };
      }

// (GET METHOD) DISPLAY INITIAL BOOKED PASSENGER DATA
getBookPassengers(){
    axios.get(`http://localhost:8080/restsample01/rest/passengers`)
      .then(res => {
          const bookPassengerList = res.data;
          this.setState({bookPassengerList:bookPassengerList});
        })
  }

  componentDidMount(){
    this.getBookPassengers();
  }

  handleChangeBookPassengerInfo = e => {
    const {name, value} = e.target;
    this.setState((prevState) => ({
      bookPassenger: {
        ...prevState.bookPassenger,
        [name]: value
      }
    }));
  }

  // (POST METHOD) ADD FLIGHTS
  handleAddBookPassenger = e => {
    let bookPassenger = this.state.bookPassenger;
    let bookPassengerList = [...this.state.bookPassengerList];
    bookPassengerList.push(bookPassenger);
    this.setState({bookPassengerList : bookPassengerList});
    e.preventDefault();
    console.log("post");
    console.log(bookPassenger);
    let headers = {
      'Content-Type': 'application/json',
  }
  axios.post(`http://localhost:8080/restsample01/rest/passengers`,bookPassenger, {headers:headers})
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
}

// (DELETE METHOD)
deleteBookPassenger = rowIndex => {
    let bookPassengerList = [...this.state.bookPassengerList];
    bookPassengerList.splice(rowIndex, 1);
    this.setState({bookPassengerList: bookPassengerList});

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
                <BookPassengerTables bookPassengerList={this.state.bookPassengerList} deleteBookPassenger={this.deleteBookPassenger} />
            </div>
            </div>
        )
    }
}

export default BookPassenger