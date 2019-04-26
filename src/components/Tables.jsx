import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Tables extends Component{
    render(){
        return(
            <Fragment>
                <table className='user-table'>
                <thead>

                </thead>
                <tbody>
                    <tr className='user-table-row'>
                        <th className='user-table-cell'>FIRST NAME</th>
                        <th className='user-table-cell'>MIDDLE NAME</th>
                        <th className='user-table-cell'>LAST NAME</th>
                        <th className='user-table-cell'>BIRTHDATE</th>
                        <th className='user-table-cell'></th>
                    </tr>
                    {
                        this.props.usersList.map((user, index) =>{
                            return (
                                <tr className='user-table-row'>
                                    <th className='user-table-cell'>{user.firstName}</th>
                                    <th className='user-table-cell'>{user.middleName}</th>
                                    <th className='user-table-cell'>{user.lastName}</th>
                                    <th className='user-table-cell'>{user.bDate}</th>
                                    <th className='user-table-cell'><button type='button' onClick={() => this.props.deleteUser(index)}>Delete User</button></th>
                                </tr>
                            )
                    })
                    }
                </tbody>
                </table>
            </Fragment>
        )
    }
}

Tables.propTypes = {
    deleteUser: PropTypes.func,
    usersList: PropTypes.func
}

export{
    Tables
}