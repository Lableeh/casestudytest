import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/AddPassenger.css';

class AddPassengerTables extends Component{
    
    render(){
        return(
            <Fragment>
                <div className="passenger-display-container">
                <table className='passenger-table'>
                <tbody>
                    <tr className='passenger-table-head'>
                        <th className='passenger-table-cell'>PASSENGER ID</th>
                        <th className='passenger-table-cell'>FIRST NAME</th>
                        <th className='passenger-table-cell'>MIDDLE NAME</th>
                        <th className='passenger-table-cell'>LAST NAME</th>
                        <th className='passenger-table-cell'>BIRTHDATE</th>
                        <th className='passenger-table-cell'>ACTION</th>
                    </tr>
                    {
                        this.props.passengerList.map((passenger, id) =>{
                            return (
                                <tr className='passenger-table-row' key={id}>
                                    <th className='passenger-table-cell'>{passenger.id}</th>
                                    <th className='passenger-table-cell'>{passenger.firstName}</th>
                                    <th className='passenger-table-cell'>{passenger.middleName}</th>
                                    <th className='passenger-table-cell'>{passenger.lastName}</th>
                                    <th className='passenger-table-cell'>{passenger.birthDate}</th>
                                    <th className='passenger-table-cell'><button type='button' className="delete-btn" onClick={() => this.props.deletePassenger(id)}>Delete</button></th>
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

AddPassengerTables.propTypes = {
    deletePassenger: PropTypes.func,
    passengerList: PropTypes.func
}

export default AddPassengerTables
