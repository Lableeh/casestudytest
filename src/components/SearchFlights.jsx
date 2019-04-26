import React, {Component} from "react"
import PropTypes from 'prop-types';
import "../css/SearchFlight.css"
import SearchBtn from "../images/search-icon.png"
import AddFlights from "../components/AddFlights"

class SearchFlights extends Component{
    render(){
        return(
            <div className="search-container">
                <form className="search-form">
                    <center>
                    <input type="text" placeholder="Search.." name="search"/>
                    <input 
                        type="text" 
                        className="search-by" 
                        list="search-option" 
                        placeholder="-------------------------- Search By --------------------------"
                    />
                        <datalist id="search-option">
                            <option value="Flight ID" />
                            <option value="Flight Number" />
                            <option value="Origin" />
                            <option value="Destination" />
                            <option value="Departure Date" />
                            <option value="Arrival Date" />
                        </datalist>
                    <button type="submit" className="search-btn">Search</button>
                    </center>
                </form>

                <div className="search-display-container">
                    <table className='user-table'>
                        <tbody>
                            <tr className='user-table-head'>
                                <th className='user-table-cell'>FLIGHT ID</th>
                                <th className='user-table-cell'>FLIGHT NUMBER</th>
                                <th className='user-table-cell'>ORIGIN</th>
                                <th className='user-table-cell'>DESTINATION</th>
                                <th className='user-table-cell'>DEPARTURE DATE/TIME</th>
                                <th className='user-table-cell'>ARRIVAL DATE/TIME</th>
                                <th className='user-table-cell'>STATUS</th>
                            </tr>
                            <tr className='user-table-row'>
                                <th className='user-table-cell'>F0011</th>
                                <th className='user-table-cell'>001122</th>
                                <th className='user-table-cell'>Manila</th>
                                <th className='user-table-cell'>Tacloban</th>
                                <th className='user-table-cell'>23-04-2019 (9:00AM)</th>
                                <th className='user-table-cell'>23-04-2019 (1:00PM)</th>
                                <th className='user-table-cell'>Ready</th>
                            </tr>
                            <tr className='user-table-row'>
                                <th className='user-table-cell'>F0012</th>
                                <th className='user-table-cell'>002233</th>
                                <th className='user-table-cell'>Manila</th>
                                <th className='user-table-cell'>Cebu</th>
                                <th className='user-table-cell'>23-04-2019 (9:00AM)</th>
                                <th className='user-table-cell'>23-04-2019 (1:00PM)</th>
                                <th className='user-table-cell'>Ready</th>
                            </tr>
                            
                    {/* {
                        this.props.flightList.map((flight, index) =>{
                            return (
                                <tr className='user-table-row'>
                                    <th className='user-table-cell'>{flight.flightID}</th>
                                    <th className='user-table-cell'>{flight.flightNum}</th>
                                    <th className='user-table-cell'>{flight.origin}</th>
                                    <th className='user-table-cell'>{flight.destination}</th>
                                    <th className='user-table-cell'>{flight.departureDT}</th>
                                    <th className='user-table-cell'>{flight.arrivalDT}</th>
                                    <th className='user-table-cell'>{flight.fStatus}</th>
                                    <th className='user-table-cell'><button type='button' onClick={() => this.props.deleteUser(index)}>Delete User</button></th>
                                </tr>
                            )
                    })
                    } */}
                </tbody>
                </table>
                </div>
            </div>
        )
    }
}

SearchFlights.propTypes = {
    deleteUser: PropTypes.func,
    usersList: PropTypes.func
}
export default SearchFlights