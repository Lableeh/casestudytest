import React, { Component, Fragment } from "react"
import PropTypes from 'prop-types';
import "../css/SearchFlight.css";
import AddFlightsTables from './AddFlightsTables'
import axios from 'axios'

const people = [
    {
        id: 1,
        first: "Sarah",
        last: "johnson",
        age: 25
    },
    {
        id: 2,
        first: "Caldwell",
        last: "Thompson",
        age: 32
    },
    {
        id: 3,
        first: "hart",
        last: "Maynard",
        age: 12
    }
]

function searchingFor(term){
    return function(x){
        return x.flightDestination.toString().toLowerCase().includes(term.toString().toLowerCase()) || !term;
    }
}

class SearchFlights extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            flightList: [],
            people : people,
            term: ''
        };

        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event){
        this.setState({ term: event.target.value})
    }
    
    // (GET METHOD) GET FLIGHT DATA
    getFlights() {
        axios.get(`http://localhost:8080/restsample01/rest/flights`)
            .then(res => {
                const flightList = res.data;
                this.setState({ flightList: flightList });
            })
    }

    componentDidMount() {
        this.getFlights();
    }

    // (DELETE METHOD)
    deleteFlight = rowIndex => {
        let flightList = [...this.state.flightList];
        flightList.splice(rowIndex, 1);
        this.setState({ flightList: flightList });

        axios.delete(`http://localhost:8080/restsample01/rest/flights/${rowIndex}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        const {term, flightList} = this.state;
        return (
            <Fragment>
            <div className="search-form-wrapper">  
                {/* <form className="search-form">
                    <center>
                        <input 
                            type="text" 
                            placeholder="Search.." 
                            name="search" 
                            className='react-search-field-input'
                          
                        />
                        <button 
                            type="submit" 
                            className="search-btn"
                           >Search
                        </button>
      
                    </center>
                </form> */}

   

                    {/* Display Flight Table */}
                    {/* <div className='flight-table-panel'>
                        <AddFlightsTables flightList={this.state.flightList} deleteFlight={this.deleteFlight}/>
                    </div> */}
                    <center>
                        <form>
                            <input 
                                type = "text"
                                onChange = {this.searchHandler}
                                value={term}
                            />
                            
                        </form>

                        <table className = "searchFlight-table">
                            <tbody>
                            <tr className='flight-table-head'>
                                <th className='flight-table-cell'>FLIGHT ID</th>
                                <th className='flight-table-cell'>FLIGHT NUMBER</th>
                                <th className='flight-table-cell'>ORIGIN</th>
                                <th className='flight-table-cell'>DESTINATION</th>
                                <th className='flight-table-cell'>DEPARTURE DATE/TIME</th>
                                <th className='flight-table-cell'>ARRIVAL DATE/TIME</th>
                                <th className='flight-table-cell'>STATUS</th>
                                <th className='flight-table-cell'>ACTION</th>
                                <th className='flight-table-cell'>ACTION</th>
                            </tr>
                            <tr className='flight-table-row'>
                            {
                                this.state.flightList.filter(searchingFor(term)).map(flight =>
                                    // <th className='flight-table-cell'>{flight.flightId}</th>
                                    // <th className='flight-table-cell'>{flight.flightNum}</th>
                                    // <th className='flight-table-cell'>{flight.flightOrigin}</th>
                                    // <th className='flight-table-cell'>{flight.flightDestination}</th>
                                    // <th className='flight-table-cell'>{flight.flightDepartureDT}</th>
                                    // <th className='flight-table-cell'>{flight.flightArrivalDT}</th>
                                    // <th className='flight-table-cell'>{flight.flightStatus}</th>
                                <div key={flight.flightId}>
                                    <h1>{flight.flightNum}</h1>
                                    <h1>{flight.flightOrigin}</h1>
                                    <h1>{flight.flightDestination}</h1>
                                    <h1>{flight.flightDepartureDT}</h1>
                                    <h1>{flight.flightArrivalDT}</h1>
                                    <h1>{flight.flightStatus}</h1>
                                </div>
                                                           
                                )
                    }
                            </tr>
                            </tbody>
                        </table>
                   

{/* <table className='flight-table'>
                <tbody>
                    <tr className='flight-table-head'>
                        <th className='flight-table-cell'>FLIGHT ID</th>
                        <th className='flight-table-cell'>FLIGHT NUMBER</th>
                        <th className='flight-table-cell'>ORIGIN</th>
                        <th className='flight-table-cell'>DESTINATION</th>
                        <th className='flight-table-cell'>DEPARTURE DATE/TIME</th>
                        <th className='flight-table-cell'>ARRIVAL DATE/TIME</th>
                        <th className='flight-table-cell'>STATUS</th>
                        <th className='flight-table-cell'>ACTION</th>
                        <th className='flight-table-cell'>ACTION</th>
                    </tr>
                    {
                        this.props.flightList.map((flight, index) =>{
                            return (
                                <tr className='flight-table-row' key={index}>
                                    <th className='flight-table-cell'>{index}</th>
                                    <th className='flight-table-cell'>{flight.flightNum}</th>
                                    <th className='flight-table-cell'>{flight.flightOrigin}</th>
                                    <th className='flight-table-cell'>{flight.flightDestination}</th>
                                    <th className='flight-table-cell'>{flight.flightDepartureDT}</th>
                                    <th className='flight-table-cell'>{flight.flightArrivalDT}</th>
                                    <th className='flight-table-cell'>{flight.flightStatus}</th>
                            <th className='flight-table-cell'><button type='button' className="edit-btn" onClick={this.openPopupbox}>Edit</button></th>
                            <th className='flight-table-cell'><button type='button' className="delete-btn" onClick={() => this.props.deleteFlight(index)}>Delete</button></th>
                           
                                </tr>
                            )
                    })
                    }
                </tbody>
                </table> */}
                    </center>
                    
                </div>
                </Fragment>
       
        )
    }
}

SearchFlights.propTypes = {
    deleteUser: PropTypes.func,
    usersList: PropTypes.func
}

export default SearchFlights