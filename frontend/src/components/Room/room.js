import React from 'react';
import './room.css';
// import { Redirect, Link } from 'react-router-dom'
// import RoomDetail from './roomDetail';


class Room extends React.Component {  

    handleClick = ()=>{
        let id = this.props.room.id
        return(
        // <Link to="/roomdetail/:id"></Link>
        // <Redirect to="/roomdetail"/>
        this.props.history.push('/roomdetail/'+id)
        )}

    componentDidUpdate = () => { 
        let room = this.props.room;
        let photoUrl = room.room_picture
            
        if(photoUrl && photoUrl.includes('api/room')){
            photoUrl = photoUrl.substring(0,photoUrl.indexOf('api')) + photoUrl.substring(photoUrl.indexOf('media'))
            room.room_picture = photoUrl
            this.setState({
                room: room
            })
        }          
        }

    render(){
        console.log('in room', this.props.room);
        let room = this.props.room;
        let photoUrl = room.room_picture;
        photoUrl = photoUrl.substring(0,photoUrl.indexOf('api')) + photoUrl.substring(photoUrl.indexOf('media'))

        return(
            
        <div className="pointer" onClick={this.handleClick}>
            {/* <div className="rooms-block"> */}
                <div className="col-sm-3 rooms-block ">
                    <div className="rooms-photos">                                 
                        <img className="roomsPhoto"  src={photoUrl} alt="roomsPhoto" ></img>
                    </div>
                    <div className="rooms_container">
                        <p className="room-title">{this.props.room.room_name}</p>
                        <p className="room-city">{this.props.room.room_city}</p>
                        <p className="room-price">${this.props.room.room_price} Per Month</p>
                    {/* </div> */}
                </div>
            </div>
        </div>
        )
    }
}
export default Room;
