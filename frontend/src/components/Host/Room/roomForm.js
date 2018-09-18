import React from 'react';
import axios from 'axios';
import './roomForm.css'
import ImageUploader from 'react-images-upload';

class RoomForm extends React.Component {
  state = {
    // user: this.props.user,
    userId: localStorage.getItem('userId'),
    pictures: [],
    room:{}

}


handleTitle = (event) =>{
  let user = this.props.user;
  this.setState({user: user})
}

handleChange = (event) =>{
  this.setState({value: event.target.value})
}

onDrop = (picture) => {
  this.setState({
      pictures: this.state.pictures.concat(picture)
  })
}

addRoom = (event) =>{
  event.preventDefault();
  let id = this.state.userId 
  let title = this.refs.title.value;
  let description = this.refs.description.value;
  let city = this.refs.city.value;
  let state = this.refs.state.value;
  let zip = this.refs.zip.value;
  let price = this.refs.price.value;

  console.log(id,price, title, description);

  var bodyFormData = new FormData();
  bodyFormData.set('profile', 'http://127.0.0.1:8000/api/profile/'+id)
  bodyFormData.set('room_name', title)
  bodyFormData.set('room_description', description)
  bodyFormData.set('room_city', city)
  bodyFormData.set('room_state', state)
  bodyFormData.set('room_zip', zip)
  bodyFormData.set('room_price', price)
  bodyFormData.set('room_picture', this.state.pictures[0])

  console.log('form data', JSON.stringify(bodyFormData));
  axios.post('http://127.0.0.1:8000/api/room/',bodyFormData)
.then(res => {
  let photoUrl = res.data.room_picture.substring(0,res.data.room_picture.indexOf('api')) + res.data.room_picture.substring(res.data.room_picture.indexOf('media'))
  res.data.room_picture = photoUrl;
  this.setState({room: res.data})
  console.log('addroom response', res.data);
})
}

  render() {
    if(this.state.userId){
      return(
        <div id="room" className="paddsection">

          <form  className="roomForm" onSubmit={this.addRoom}>
            <div className="roomHead">
              <h5 className="roomEdit">Room Photos</h5>
            </div>

            <div className="roomDetail">
            <div className=" profileRow">
                <div className="roomPhoto">      
                <img className="profilePhoto" src={this.state.room.room_picture} alt="" ></img>
                <p className="noticeDetail">
                 Add 1 photo to give your guests an idear of what your room looks like
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
                <input type="text"  placeholder="Cozy Room in SJ DownTown" onChange={this.handleTitle} ref="title" />
              </div>
            </div>

            <div className="row roomRow ">
            <div className="roomLabel col-sm-3">
              <label className="formTitle ">$Price/month :</label>
            </div>
            <div className="roomInput col-sm-3">
            <input type="text" placeholder="1234" ref="price"/>
  
            </div>
            </div>
    <hr/>

            <div className="row roomRow ">
            <div className="roomLabel col-sm-3">
              <label className="formTitle ">Description:</label>
            </div>
            <div className="roomInput col-sm-9">
              <textarea ref="description" className="form-control" name="description" rows="12" data-rule="required" data-msg="Please enter at least 8 chars of subject" placeholder="Please descripte your room"></textarea>
            </div>
            </div>
    <hr/>
            <div className="row roomRow ">
            <div className="roomLabel col-sm-3">
              <label>Where’s your place located?</label>
            </div>
            <div className="roomInput col-sm-9">
              <label className="formTitle">Street Address:</label>
                <input ref="street" type="text"  placeholder="e.g. 123 Main St."  />
                <label className="formTitle">Apt, Suite. (optional):</label>
                <input ref="apt" type="text"  placeholder="e.g. Apt #3"  />
                <label className="formTitle">City</label>
                <input ref="city" type="text"  placeholder="e.g. San Francisco"  />
                <label className="formTitle">State</label>
                <input ref="state" type="text"  placeholder="CA"  /> 
                <label className="formTitle">ZIP Code</label>
                <input ref="zip" type="text"  placeholder="e.g. 94539"  />
                <label className="formTitle">Country / Region</label>
                <p className="country">United States </p>
               </div>
            </div>
    
            <div className="col-lg-12">
              <input type="submit" className="roomButton" value="Submit"/>
            </div>
          </div>

       </form>
      </div>

    )
    }   
}  
}
export default RoomForm

