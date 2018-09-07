import React, {Component} from 'react';
import './nav.css';
import Signup from './Signup/signup.js';
import Login from './Login/login';
import { Link } from 'react-router-dom';
// import Search from './Search/search.js'

const $ = window.$;
class Nav extends Component{

  componentDidMount() {
    window.scroll(() => {
      var scroll = $(window).scrollTop();
      if (scroll > 200 ) {
        $("#main-nav, #main-nav-subpage").slideDown(700);
        $("#main-nav-subpage").removeClass('subpage-nav');
      } else {
        $("#main-nav").slideUp(700);
        $("#main-nav-subpage").hide();
        $("#main-nav-subpage").addClass('subpage-nav');
      }
    })
  }

  renderLinks = () => {
    if (this.props.user){
      
      return (
        <div className="row">
        <div className="container">

        <div className="logo">
              <Link exact to="/"><h2>AirLand</h2></Link>
        </div>
        <ul className="nav-menu list-unstyled">

        <li key ={1}>
        <Link to="/host" className="smoothScroll">Become a host</Link>
        </li>
        <li key ={2}>
        <Link exact to="/" onClick={this.props.signout}>Sign Out</Link>
        </li>
        <li key ={3}>
        <Link to="/profile">Hello, {this.props.user.first_name}</Link>

        </li>
        </ul>
        </div>
        </div>
      )
    } else {
      return (
        <div className="row">
        <div className="container">

        <div className="logo">
        <Link exact to="/"><h2>AirLand</h2></Link>
        </div>
        <ul className="nav-menu list-unstyled">
        
        <li key ={1}>
        <Link exact to="/host" className="smoothScroll">Become a host</Link>
        </li>
        <li key ={2}>
        <Link  exact to="/"><Signup login={this.props.login}/></Link>
        </li>
        <li key ={3}>
        <Link to="/"><Login login={this.props.login}/></Link>
        </li>  
        <li key ={4}>
        {/* <Link to="/"><Search/></Link> */}
        </li>       
        </ul>
        </div>
        </div>
      )
    }
  }



  render() {
    return(
        <nav id="main-nav">
            <div className="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>
            <ul className="nav-menu list-unstyled">
              {this.renderLinks()}
            </ul>
    
        </nav>
    )
}
  }



export default Nav;