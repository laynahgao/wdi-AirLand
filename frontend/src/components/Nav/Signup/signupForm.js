import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import './signupForm.css';
import axios from 'axios';

export default class SignupForm extends Component {

  handleResponse = (data) => {
    let profile = {
      profile_id:data.profile.id,
      email: data.profile.email,
      first_name: data.profile.first_name
    }
    axios.post('http://127.0.0.1:8000/api/profile/', profile)
    .then(res => {
      console.log('signup', res.data);
      this.props.login(res.data);
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
          <button className="loginBtn loginBtn--facebook pointer"> Signup with Facebook</button>
          </div>
          </Login>
      </FacebookProvider>
      
    );
  }
}