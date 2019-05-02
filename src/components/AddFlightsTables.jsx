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
                        <th className='flight-table-cell'>FLIGHT ID</th>
                        <th className='flight-table-cell'>FLIGHT NUMBER</th>
                        <th className='flight-table-cell'>ORIGIN</th>
                        <th className='flight-table-cell'>DESTINATION</th>
                        <th className='flight-table-cell'>DEPARTURE DATE/TIME</th>
                        <th className='flight-table-cell'>ARRIVAL DATE/TIME</th>
                        <th className='flight-table-cell'>STATUS</th>
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
                                    <th className='flight-table-cell'><button type='button' className="delete-btn" onClick={() => this.props.deleteFlight(index)}>Delete Flight</button></th>
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
    deleteFlight: PropTypes.func,
    flightList: PropTypes.func
}

export default AddFlightsTables