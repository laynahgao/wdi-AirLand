import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/nav.js';
import Signout from './components/Nav/Signout/signout.js'
import Footer from './components/Footer/footer.js';
import Landing from './components/Landing/landing';
import About from './components/About/about';
import Header from './components/Host/Header/header';
import RoomForm from './components/Host/Room/roomForm';
import RoomDetail from './components/Room/roomDetail';
import Rooms from './components/Room/rooms';
import ProfileRoom from './components/Profile/profileRoom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile/profile.js';


class App extends Component {

  state = {
    user: ''
  }

  login = (newUser) => {
    this.setState({user: newUser})
    localStorage.setItem('userId',newUser.profile_id)
  }

  signout = () => {
    this.setState({user:''})
    localStorage.removeItem('userId');
  }

  updateUser = (updatedUser) => {
    this.setState({user: updatedUser})
  }

  addRoom = (addRoom) => {
    this.setState({user: addRoom})
  }

  render() {

    return (
      <Router>
      <div>
        <Nav login={this.login} user={this.state.user} signout={this.signout}/>
        <Route exact path="/" render={(props) => <Landing {...props}/>} />
        <Route path="/signout" component={Signout} />
        <Route path="/roomdetail/:room_id" component={RoomDetail} />
        <Route path="/about" component={About} />
        <Route path="/profileroom/:room_id" component={ProfileRoom} />
        <Route path="/rooms" render={(props) => <Rooms {...props}/>} />
        <Route path="/host" render={(props) => <Header {...props}/>}/>
        <Route path="/roomForm" render={(props)=><RoomForm {...props} user={this.state.user} addRoom={this.addRoom}/>}/>
        <Route path="/profile" render={(props)=><Profile {...props} user={this.state.user} updateUser={this.updateUser}/>}/>
        {this.state.user?<Redirect exact to="/"/>:null}
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
