import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import "../css/BookPassenger.css";


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
                        <th className='bookpassenger-table-cell'>PASSENGER NAME</th>
                        <th className='bookpassenger-table-cell'>ORIGIN</th>
                        <th className='bookpassenger-table-cell'>DESTINATION</th>
                        <th className='bookpassenger-table-cell'>DEPARTURE DATE/TIME</th>
                        <th className='bookpassenger-table-cell'>ARRIVAL DATE/TIME</th>
                        <th className='bookpassenger-table-cell'>STATUS</th>
                        <th className='bookpassenger-table-cell'>PASSENGER ID</th>
                        <th className='bookpassenger-table-cell'>CLASS</th>
                        <th className='bookpassenger-table-cell'>ACTION</th>
                        <th className='bookpassenger-table-cell'>ACTION</th>
                    </tr>
                    {
                        this.props.bookPassengerList.map((bookPassenger, index) =>{
                            return (
                                <tr className='bookpassenger-table-row' key={index}>
                                    <th className='bookpassenger-table-cell'>{bookPassenger.bookId}</th>
                                    <th className='bookpassenger-table-cell'>{bookPassenger.pflightId}</th>
                                    <th className='bookpassenger-table-cell'>{bookPassenger.firstName}</th>
                                    <th className='bookpassenger-table-cell'>{bookPassenger.flightOrigin}</th>
                                    <th className='bookpassenger-table-cell'>{bookPassenger.flightDestination}</th>
                                    <th className='bookpassenger-table-cell'>{bookPassenger.flightDepartureDT}</th>
                                    <th className='bookpassenger-table-cell'>{bookPassenger.flightArrivalDT}</th>
                                    <th className='bookpassenger-table-cell'>{bookPassenger.flightStatus}</th>
                                    <th className='bookpassenger-table-cell'>{bookPassenger.passengerId}</th>  
                                    <th className='bookpassenger-table-cell'>{bookPassenger.flightClass}</th>         
                            <th className='bookpassenger-table-cell'><button type='button' className="edit-btn" onClick={this.openPopupbox}>Edit</button></th>
                            <th className='bookpassenger-table-cell'><button type='button' className="delete-btn" onClick={() => this.props.deleteBookPassenger(index)}>Delete</button></th>
                           
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
    deleteBookPassenger: PropTypes.func,
    passengerList: PropTypes.func
}
export default BookPassengerTables