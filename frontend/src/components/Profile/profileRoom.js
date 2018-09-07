import React from 'react';
import './profileRoom.css';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import '../Host/Room/roomForm.css';

class profileRoom extends React.Component {  

    state = {
      userId: localStorage.getItem('userId'),
      pictures: [],
      room:{}    
    }

// get room info
    componentDidMount = () => {
        let room = this.state.room;
        let room_id = this.props.match.params.room_id;
        let photoUrl = room.room_picture;

        if(photoUrl && photoUrl.includes('api/room')){
          photoUrl = photoUrl.substring(0,photoUrl.indexOf('api')) + photoUrl.substring(photoUrl.indexOf('media'))
          room.room_picture = photoUrl
          this.setState({
              room: room
          })
      }
        axios.get('http://127.0.0.1:8000/api/room/'+room_id)
        .then(res => {
            this.setState({room: res.data})
        })
    }
// change info
handleTitle =(event)=>{
    let room = this.state.room;
    room.room_name = event.target.value
    this.setState({room: room})
}
handleDescription =(event)=>{
  let room = this.state.room;
  room.room_description = event.target.value
  this.setState({room: room})
}
handlePrice =(event)=>{
    let room = this.state.room;
    room.room_price = event.target.value
    this.setState({room: room})
}
handleStreet =(event)=>{
  let room = this.state.room;
  room.room_street = event.target.value
  this.setState({room: room})
}
handleApt =(event)=>{
  let room = this.state.room;
  room.room_apt = event.target.value
  this.setState({room: room})
}
handleCity =(event)=>{
  let room = this.state.room;
  room.room_city = event.target.value
  this.setState({room: room})
}
handleZip =(event)=>{
  let room = this.state.room;
  room.room_zip = event.target.value
  this.setState({room: room})
}
handleState =(event)=>{
  let room = this.state.room;
  room.room_state = event.target.value
  this.setState({room: room})
}

// update img
onDrop = (picture) => {
  this.setState({
      pictures: this.state.pictures.concat(picture)
  })
}

// put room info
editRoom =(event)=>{
    event.preventDefault();
    let room_id = this.props.match.params.room_id;
    let title = this.refs.title.value;
    let description = this.refs.description.value;
    let price = this.refs.price.value;
    let street = this.refs.street.value;
    let apt = this.refs.apt.value;
    let city = this.refs.city.value;
    let zip = this.refs.zip.value;
    // let state = this.refs.state.value;

    var bodyFormData = new FormData();
    bodyFormData.set('room_name', title)
    bodyFormData.set('room_description', description)
    bodyFormData.set('room_price', price)
    bodyFormData.set('room_street', street)
    bodyFormData.set('room_apt', apt)
    bodyFormData.set('room_city', city)
    bodyFormData.set('room_zip', zip)
    bodyFormData.set('room_state', zip)

    if(this.state.pictures[0]){
      bodyFormData.set('room_picture', this.state.pictures[0])
    }
    
    bodyFormData.set('profile', 'http://127.0.0.1:8000/api/profile/'+this.state.userId)

    axios.put('http://127.0.0.1:8000/api/room/'+room_id, bodyFormData)
    .then(res => {
      let photoUrl = res.data.room_picture.substring(0,res.data.room_picture.indexOf('api')) + res.data.room_picture.substring(res.data.room_picture.indexOf('media'))
      res.data.room_picture = photoUrl;
      this.setState({room: res.data})
      console.log('editroom response', res.data);

      // this.props.updateRoom(res.data)
  })
}
// delete room info
deleteRoom =(event)=>{
  event.preventDefault();
  let room_id = this.props.match.params.room_id;
  axios.delete('http://127.0.0.1:8000/api/room/'+room_id)
  .then(res => {
    console.log ("delete")
    // this.props.deleteRoom();

    // this.setState({})
  })
  this.props.history.push('/profile')
}
    render(){
        
        return(
          <div id="room" className="paddsection">
          <form  className="roomForm" onSubmit={this.editRoom} >
                <div className="roomHead">
                  <h5 className="roomEdit">Room Photos</h5>
                </div>
                <div className="roomDetail">
                   <div className="profileRow">
                     <div className="roomPhoto">      
                       <img className="profilePhoto" src={this.state.room.room_picture} alt="" ></img>               
                       <p className="noticeDetail">
                         Add up to 1 photos to give your guests an idear of what your room looks like
                       </p>
                       <ImageUploader
                          withIcon={true}
                          buttonText='Choose images'
                          onChange={this.onDrop}
                          imgExtension={['.jpg', 'jpeg', '.gif', '.png', '.gif']}
                          maxFileSize={5242880}
                       />
                      </div> 
                   </div> 
                 </div>

                <div className="roomHead">           
                    <h5 className="roomEdit">Room Detail</h5>
                </div> 
                <div className="roomDetail">
                  <div className="row roomRow ">
                     <div className="roomLabel col-sm-3">
                       <label>Title:</label>
                    </div>
                    <div className="roomInput col-sm-9">
                       <input type="text"  value={this.state.room.room_name} onChange={this.handleTitle} ref="title" />
                    </div>
                  </div>

            
            <div className="row roomRow ">
            <div className="roomLabel col-sm-3">
              <label className="formTitle ">$Price/month :</label>
            </div>
            <div className="roomInput col-sm-3">
            <input type="text" ref="price"  value={this.state.room.room_price} onChange={this.handlePrice}/>
            </div>
            </div>
    <hr/>

            <div className="row roomRow ">
            <div className="roomLabel col-sm-3">
              <label className="formTitle ">Description:</label>
            </div>
            <div className="roomInput col-sm-9">
              <textarea ref="description" className="form-control" name="description" rows="12" 
              data-rule="required" data-msg="Please enter at least 8 chars of subject" 
              value={this.state.room.room_description} onChange={this.handleDescription}></textarea>
            </div>
            </div>
    <hr/>
            <div className="row roomRow ">
            <div className="roomLabel col-sm-3">
              <label>Where’s your place located?</label>
            </div>
            <div className="roomInput col-sm-9">
              <label className="formTitle">Street Address:</label>
                <input ref="street" type="text"  value={this.state.room.room_street} onChange={this.handleStreet} />
                <label className="formTitle">Apt, Suite. (optional):</label>
                <input ref="apt" type="text"  value={this.state.room.room_apt}  onChange={this.handleApt}/>
                <label className="formTitle">City</label>
                <input ref="city" type="text"  value={this.state.room.room_city} onChange={this.handleCity} />
                <label className="formTitle">State</label>
                <input ref="state" type="text"  value={this.state.room.room_state} onChange={this.handleState} /> 
                <label className="formTitle">ZIP Code</label>
                <input ref="zip" type="text"  value={this.state.room.room_zip} onChange={this.handleZip} />
                <label className="formTitle">Country / Region</label>
                <p className="country">United States </p>
               </div>
            </div>
    
            <div className="col-lg-12 buttons">
              <input type="submit" className="profileButton saveButton" value="Submit"/>
              <input type="submit" className="profileButton" value="Delete" onClick={this.deleteRoom}/>
            </div>
          </div>

       </form>
      </div>
        )
    }
}
export default profileRoom;