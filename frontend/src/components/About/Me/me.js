import React from 'react';
import './me.css';
import MeImg from './me.jpeg';

const Me =() => {
    return (
        <div id="about" className="paddsection">
          <div className="container">
            <div className="row ">
      
              <div className="col-sm-3 ">
                <div className="div-img-bg">
                  <div className="about-img">
                    <img src={MeImg} className="img-responsive" alt="me"/>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </div>
    )
}
export default Me;