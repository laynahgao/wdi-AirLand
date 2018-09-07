import React from 'react';
import Popup from "reactjs-popup";
import './signup.css';
import SignupForm from './signupForm'


const Signup = (props) =>{

    return(
        <Popup
        trigger={<button className="signupButton pointer"> SIGN UP </button>}
        modal>
        <div className="popmodel">
        <SignupForm login={props.login}/>
        </div>
       </Popup>

    )
}
export default Signup;