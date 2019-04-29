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
                        <th className='passenger-table-cell'>FIRST NAME</th>
                        <th className='passenger-table-cell'>MIDDLE NAME</th>
                        <th className='passenger-table-cell'>LAST NAME</th>
                        <th className='passenger-table-cell'>BIRTHDATE</th>
                        <th className='passenger-table-cell'>ACTION</th>
                    </tr>
                    {
                        this.props.usersList.map((user, index) =>{
                            return (
                                <tr className='passenger-table-row'>
                                    <th className='passenger-table-cell'>{user.firstName}</th>
                                    <th className='passenger-table-cell'>{user.middleName}</th>
                                    <th className='passenger-table-cell'>{user.lastName}</th>
                                    <th className='passenger-table-cell'>{user.bDate}</th>
                                    <th className='passenger-table-cell'><button type='button' className="delete-btn" onClick={() => this.props.deleteUser(index)}>Delete User</button></th>
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
    deleteUser: PropTypes.func,
    userList: PropTypes.func
}

export default AddPassengerTables
