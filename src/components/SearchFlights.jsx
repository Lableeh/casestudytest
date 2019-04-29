import React, {Component} from "react"
import PropTypes from 'prop-types';
import "../css/SearchFlight.css";

class SearchFlights extends Component{
    render(){
        return(  
            <div className="search-form-wrapper">
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
                    <table className='search-flight-table'>
                        <tbody>
                            <tr className='search-flight-table-head'>
                                <th className='search-flight-table-cell'>FLIGHT ID</th>
                                <th className='search-flight-table-cell'>FLIGHT NUMBER</th>
                                <th className='search-flight-table-cell'>ORIGIN</th>
                                <th className='search-flight-table-cell'>DESTINATION</th>
                                <th className='search-flight-table-cell'>DEPARTURE DATE/TIME</th>
                                <th className='search-flight-table-cell'>ARRIVAL DATE/TIME</th>
                                <th className='search-flight-table-cell'>STATUS</th>
                            </tr>
                            <tr className='search-flight-table-row'>
                                <th className='search-flight-table-cell'>F0011</th>
                                <th className='search-flight-table-cell'>001122</th>
                                <th className='search-flight-table-cell'>Manila</th>
                                <th className='search-flight-table-cell'>Tacloban</th>
                                <th className='search-flight-table-cell'>23-04-2019 (9:00AM)</th>
                                <th className='search-flight-table-cell'>23-04-2019 (1:00PM)</th>
                                <th className='search-flight-table-cell'>Ready</th>
                            </tr>
                            <tr className='search-flight-table-row'>
                                <th className='search-flight-table-cell'>F0012</th>
                                <th className='search-flight-table-cell'>002233</th>
                                <th className='search-flight-table-cell'>Manila</th>
                                <th className='search-flight-table-cell'>Cebu</th>
                                <th className='search-flight-table-cell'>23-04-2019 (9:00AM)</th>
                                <th className='search-flight-table-cell'>23-04-2019 (1:00PM)</th>
                                <th className='search-flight-table-cell'>Ready</th>
                            </tr>

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