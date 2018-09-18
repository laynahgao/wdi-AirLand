import React from 'react';
import './room.css';
import axios from 'axios'
import Room from './room';

class Rooms extends React.Component {  
    
    state = {
        rooms: []
    }

    componentDidMount = () =>{
        axios.get('http://127.0.0.1:8000/api/room/')
        .then(response => {
            console.log(response.data)
            this.setState({rooms: response.data})
        })
    }

    render(){

        let room = this.state.rooms.map(room => {
            return(<Room key={room._id} room={room} {...this.props}/>)
        })
        return(
            <div  id="rooms" className="paddsection">
                <div className="container roomslist" >
                     {room}

                 </div>
            </div>

        )
    }
}
export default Rooms;