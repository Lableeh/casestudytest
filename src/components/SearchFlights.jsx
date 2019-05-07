import React, { Component, Fragment } from "react"
import PropTypes from 'prop-types';
import "../css/SearchFlight.css";
import searchIcon from "../images/search-icon.png"
import axios from 'axios'


// function searchingFor(term){
//     return function(x){
//         return x.flightId.toString().toLowerCase().includes(term.toString().toLowerCase()) || !term;
//     }
// }

function searchingFor(term){
    return function(x){
        return x.flightId.toString().toLowerCase().includes(term.toString().toLowerCase()) || 
        x.flightNum.toString().toLowerCase().includes(term.toString().toLowerCase()) ||
        x.flightOrigin.toString().toLowerCase().includes(term.toString().toLowerCase()) ||
        x.flightDestination.toString().toLowerCase().includes(term.toString().toLowerCase()) ||
        x.flightDepartureDT.toString().toLowerCase().includes(term.toString().toLowerCase()) ||
        x.flightArrivalDT.toString().toLowerCase().includes(term.toString().toLowerCase()) ||
        x.flightStatus.toString().toLowerCase().includes(term.toString().toLowerCase());
    }
}

class SearchFlights extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            flightList: [],
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
        const {term} = this.state;
        return (
            <Fragment>
            <div className="search-form-wrapper">  
                <center>
                    <form>
                        <input 
                            type = "text"
                            placeholder = "Search"
                            onChange = {this.searchHandler}
                            value={term}
                            className = "search-bar"
                        />
                        <img src={searchIcon} alt="search-icon" width="50px" height="50px" className="search-icon"></img>
                    </form>
                </center>  
                        
            <div className = "searchFlight-display-container">
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
                {
                    this.state.flightList.filter(searchingFor(term)).map((flight,index) => {
                        return(
                            <tr className='flight-table-row' key={flight.flightId}>
                                <th className='flight-table-cell'>{flight.flightId}</th>
                                <th className='flight-table-cell'>{flight.flightNum}</th>
                                <th className='flight-table-cell'>{flight.flightOrigin}</th>
                                <th className='flight-table-cell'>{flight.flightDestination}</th>
                                <th className='flight-table-cell'>{flight.flightDepartureDT}</th>
                                <th className='flight-table-cell'>{flight.flightArrivalDT}</th>
                                <th className='flight-table-cell'>{flight.flightStatus}</th>
                                <th className='flight-table-cell'><button type='button' className="edit-btn" onClick={this.openPopupbox}>Edit</button></th>
                                <th className='flight-table-cell'><button type='button' className="delete-btn" onClick={() => this.deleteFlight(index)}>Delete</button></th>
                            </tr>
                        )
                    })
                }       
                    </tbody>
                </table>                      
            </div>           
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