import React from 'react';
import './roomDetail.css';
import axios from 'axios';

class RoomDetail extends React.Component {  

    state = {
        room:{},
        pictures: []

    }

    componentDidMount = () => {
        let room_id = this.props.match.params.room_id;

        axios.get('http://127.0.0.1:8000/api/room/'+room_id)
        .then(res => {
            this.setState({room: res.data})
        })
    }

    // let room = this.state.room;
    //     let photoUrl = room.room_picture;

    //     if(photoUrl && photoUrl.includes('api/room')){
    //         photoUrl = photoUrl.substring(0,photoUrl.indexOf('api')) + photoUrl.substring(photoUrl.indexOf('media'))
    //         room.room_picture = photoUrl
    //         this.setState({
    //             room: room
    //         })
    //     }


    render(){
        let room = this.state.room;
        let photoUrl = room.room_picture;
        if(photoUrl){
            photoUrl = photoUrl.substring(0,photoUrl.indexOf('api')) + photoUrl.substring(photoUrl.indexOf('media'))
        }
        
       
        return(
            <div  id="roomDetail" className="text-left paddsection">
                <div className="container detailContainer" >
                    <div className="detailImg">
                        <img className="profilePhoto" src={photoUrl} alt="" ></img>
                    </div>
                        <div className="detail-text">
                            <div className="detailTitle">
                                <h5 className="detailTitle">{this.state.room.room_name}</h5>
                                <h5 className="detailPrice">$ {this.state.room.room_price} per Month</h5>
                            </div>
                    <hr/>
                            <div className="description">
                                <label className="detailLabel">Description</label>
                                <p className="roomDescription">{this.state.room.room_description}</p>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}
export default RoomDetail;