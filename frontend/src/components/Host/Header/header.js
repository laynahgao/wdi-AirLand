import React, {Component} from 'react';
import './header.css'
import N1 from './number1.png';
import N2 from './number2.png';
import N3 from './number3.png';


class Header extends Component{

  state = {
    user: this.props.user
}

  handleClick = (event) =>{
    event.preventDefault();
    let id = localStorage.getItem('userId');
    console.log(id);
    if(id){
      this.props.history.push('/roomForm')
    }else{
      alert('Please Login/Sign up to become a host')
    }
     
  }

  render() {
  return (
<div id="header" className="home">

<div className="container">
  <div className="header-content">
    <div className="introduce">
    <h2> Hosting in 3 steps</h2>
    <button className="hostButton" href="/roomForm"  type="submit" onClick={this.handleClick}>Start to host</button>
  <hr/>
  <div id="host" className="text-left paddsection">
 <div className="container">
  <div className="host-block">
    <div className="row">

      <div className="col-lg-4 col-md-6">
          <div className="host-txt">
            <img className="number" src ={N1} alt="NO1"/>
            <h5>List your space for free</h5>
            <h6>Share any space without sign-up charges, from a shared living room to a second home and everything in-between.  
            </h6>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
          <div className="host-txt">
          <img className="number" src ={N2} alt="No2"/>
          <h5>Decide how you want to host</h5>
          <h6>require 1 month minimum rental. Choose your own schedule, prices, and requirements for guests. 
          </h6>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
          <div className="host-txt">
          <img className="number" src ={N3} alt="No3"/>
          <h5>Welcome your first guest</h5>
          <h6>Once your listing is live, qualified guests can reach out. You can message them with any questions before their stay.
          </h6>
          </div>
      </div>

    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>

  )
}
}
export default Header;