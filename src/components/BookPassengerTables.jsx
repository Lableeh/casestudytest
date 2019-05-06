import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import "../css/AddFlight.css";
import Popup from "reactjs-popup";

class BookPassengerTables extends Component{
        render(){
            return(
                <Fragment>
                <div className="bookpassenger-display-container">
                <table className='bookpassenger-table'>
                <tbody>
                    <tr className='bookpassenger-table-head'>
                        <th className='bookpassenger-table-cell'>BOOK ID</th>
                        <th className='bookpassenger-table-cell'>FLIGHT ID</th>
                        <th className='bookpassenger-table-cell'>FLIGHT NUM</th>
                        <th className='bookpassenger-table-cell'>ORIGIN</th>
                        <th className='bookpassenger-table-cell'>DESTINATION</th>
                        <th className='bookpassenger-table-cell'>DEPARTURE DATE/TIME</th>
                        <th className='bookpassenger-table-cell'>ARRIVAL DATE/TIME</th>
                        <th className='bookpassenger-table-cell'>STATUS</th>
                        <th className='bookpassenger-table-cell'>PASSENGER ID</th>
                        <th className='bookpassenger-table-cell'>ACTION</th>
                        <th className='bookpassenger-table-cell'>ACTION</th>
                    </tr>
                    {
                        this.props.flightList.map((flight, index) =>{
                            return (
                                <tr className='bookpassenger-table-row' key={index}>
                                    <th className='bookpassenger-table-cell'>{flight.bookId}</th>
                                    <th className='bookpassenger-table-cell'>{flight.pflightId}</th>
                                    <th className='bookpassenger-table-cell'>{flight.flightNum}</th>
                                    <th className='bookpassenger-table-cell'>{flight.flightOrigin}</th>
                                    <th className='bookpassenger-table-cell'>{flight.flightDestination}</th>
                                    <th className='bookpassenger-table-cell'>{flight.flightDepartureDT}</th>
                                    <th className='bookpassenger-table-cell'>{flight.flightArrivalDT}</th>
                                    <th className='bookpassenger-table-cell'>{flight.flightStatus}</th>
                                    <th className='bookpassenger-table-cell'>{flight.passengerId}</th>           
                            <th className='bookpassenger-table-cell'><button type='button' className="edit-btn" onClick={this.openPopupbox}>Edit</button></th>
                            <th className='bookpassenger-table-cell'><button type='button' className="delete-btn" onClick={() => this.props.deletePassenger(index)}>Delete</button></th>
                           
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

BookPassengerTables.propTypes = {
    deletePassenger: PropTypes.func,
    flightList: PropTypes.func
    
}
export default BookPassengerTables