import React , {Component} from "react"
import PropTypes from 'prop-types';
import "../css/AddPassenger.css"
import mUser from '../images/male_user.png'

class AddPassengerforms extends Component{
    render(){
        return(
          <div className='passenger-form-wrapper'> 
      
     
        <form>
          <h2><center>Passenger Information</center></h2>
          <br/>
          <div className="row">
            <div className="col-25">
              <p>.</p>
              <img src={mUser} alt="User Icon" width="110px" height="110px" className="mUser"></img>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>First Name: </label>
            </div>
            <div className="col-75">
              <input 
                type="text" 
                name="firstName" 
                placeholder="Enter Your First Name" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Middle Name: </label>
            </div>
            <div className="col-75">
              <input 
                type="text" 
                name="middleName" 
                placeholder="Enter Your Middle Name" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Last Name:</label>
            </div>
            <div className="col-75">
              <input 
              type="text" 
              name="lastName" 
              placeholder="Enter Your Last Name" 
              onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-25">
              <label>Birth Date: </label>
            </div>

            <div className="col-75">
              <input 
                type="date" 
                name="birthDate" 
                placeholder="Enter Your Birthdate" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>  

          <div className="row">
            <div className="col-25">
            </div>
            <div className="col-75">
              <button 
                type="button" 
                className="button" 
                onClick={this.props.handleAddPassenger}>Add
              </button>
            </div>
          </div>
        </form> 
            
      </div>
        )
    }
}

AddPassengerforms.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddPassenger: PropTypes.func
}

export default AddPassengerforms