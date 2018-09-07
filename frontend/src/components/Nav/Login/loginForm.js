import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import './loginForm.css';
import axios from 'axios';

export default class LoginForm extends Component {

  handleResponse = (data) => {
    let id = data.profile.id;
    axios.get('http://127.0.0.1:8000/api/profile/'+id)
    .then(res => {
      this.props.login(res.data)
    })

  }
 
  handleError = (error) => {
    this.setState({ error });
  }
 
  render() {
    return (
      <FacebookProvider appId="263165010973089">
        <Login 
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <div className="facebook">
          <button className="loginBtn loginBtn--facebook pointer"> Login with Facebook</button>
          </div>
          </Login>
      </FacebookProvider>
      
    );
  }
}