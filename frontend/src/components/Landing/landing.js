import React from 'react';
import HeaderLand from './HeaderLand/headerLand.js';
import Rooms from '../Room/rooms.js'
import './landing.css'
const Landing = (props) =>{
    return(
        <div>
            <HeaderLand/>
            <div className="around">
                     <h3 className="around-text">Homes Around the Bayarea</h3>
                </div>
            <div className="landingRooms">
            <Rooms {...props}/>
            </div>    
        </div>
    )
}
export default Landing;