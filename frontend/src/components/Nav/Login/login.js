import React from 'react';
import Popup from "reactjs-popup";
import './login.css';
import LoginForm from './loginForm';

const Login = (props) =>{
    return(
       
        <Popup
        trigger={<button className="loginButton pointer"> LOG IN </button>}
        modal>
        <LoginForm login={props.login}/>
      </Popup>

     

    )
}
export default Login;