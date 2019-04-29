import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import "../css/AddFlight.css";

class AddFlightsTables extends Component{
    render(){
        return(
    
                <Fragment>
                <div className="flight-display-container">
                <table className='flight-table'>
                <tbody>
                    <tr className='flight-table-head'>
                        <th className='flight-table-cell'>FLIGHT NUMBER</th>
                        <th className='flight-table-cell'>ORIGIN</th>
                        <th className='flight-table-cell'>DESTINATION</th>
                        <th className='flight-table-cell'>DEPARTURE DATE/TIME</th>
                        <th className='flight-table-cell'>ARRIVAL DATE/TIME</th>
                        <th className='flight-table-cell'>STATUS</th>
                    </tr>
                    {
                        this.props.flightList.map((flight, index) =>{
                            return (
                                <tr className='flight-table-row'>
                                    <th className='flight-table-cell'>{flight.flightNum}</th>
                                    <th className='flight-table-cell'>{flight.origin}</th>
                                    <th className='flight-table-cell'>{flight.destination}</th>
                                    <th className='flight-table-cell'>{flight.departureDT}</th>
                                    <th className='flight-table-cell'>{flight.arrivalDT}</th>
                                    <th className='flight-table-cell'><button type='button' className="delete-btn" onClick={() => this.props.deleteUser(index)}>Delete User</button></th>
                                </tr>
                            )
                    })
                    }
                </tbody>
                </table>
                
                </div>
            </Fragment>
    
        )
    }
}

AddFlightsTables.propTypes = {
    deleteUser: PropTypes.func,
    flightList: PropTypes.func
}

export default AddFlightsTables