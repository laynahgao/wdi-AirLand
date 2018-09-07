import React from 'react';
import axios from 'axios';
import './roomForm.css'
// import { FormGroup } from 'react-bootstrap';
// import { ControlLabel } from 'react-bootstrap';
// import { FormControl } from 'react-bootstrap';
// import { Checkbox } from 'react-bootstrap';
// import { InputGroup } from 'react-bootstrap';
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
  // room.title = event.target.value
  this.setState({user: user})
}

handleChange = (event) =>{
  // let user = this.props.user;
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
  // let country = this.refs.country.value;
  let price = this.refs.price.value;

  console.log(id,price, title, description);

  var bodyFormData = new FormData();
  bodyFormData.set('profile', 'http://127.0.0.1:8000/api/profile/'+id)
  bodyFormData.set('room_name', title)
  bodyFormData.set('room_description', description)
  bodyFormData.set('room_city', city)
  bodyFormData.set('room_state', state)
  bodyFormData.set('room_zip', zip)
  // bodyFormData.set('room_country', country)
  bodyFormData.set('room_price', price)
  bodyFormData.set('room_picture', this.state.pictures[0])

  console.log('form data', JSON.stringify(bodyFormData));
  axios.post('http://127.0.0.1:8000/api/room/',bodyFormData)
.then(res => {
  let photoUrl = res.data.room_picture.substring(0,res.data.room_picture.indexOf('api')) + res.data.room_picture.substring(res.data.room_picture.indexOf('media'))
  res.data.room_picture = photoUrl;
  this.setState({room: res.data})
  // this.props.updateUser(res.data)
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
    // else{
    //   return (
    //     <div id="room" className="paddsection">
    //       <h1>Please Signup/ Login before becoming a host.</h1>
    //     </div>
    //   )
    // }
    
}  
}
export default RoomForm


{/* <div className="amenities row roomRow selectBox">
              <FormGroup controlId="formControlsSelect">
            <div className="selectLabel col-sm-5">
              <ControlLabel>Place Type</ControlLabel>
            </div>
            <div className="row selectItem">
              <FormControl value={this.state.value} onChange={this.handleChange} componentClass="select" placeholder="select" className="selectList">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="house">Secondary unit</option>
                <option value="house">Unique space</option>
              </FormControl>
            </div>
              </FormGroup>
            </div>

            <div className="amenities row roomRow selectBox ">
              <FormGroup controlId="formControlsSelect">
            <div className="roomLabel col-sm-3">
              <ControlLabel>What kind of place do you have</ControlLabel>
            </div>
            <div className="row selectItem">
              <FormControl componentClass="select" placeholder="select">
                <option value="whole">Entire place</option>
                <option value="private">Private Room</option>
                <option value="share">Share Room</option>
              </FormControl>
            </div>
              </FormGroup>
            </div>

            <div className="amenities row roomRow selectBox">
              <FormGroup controlId="formControlsSelect">
            <div className="roomLabel col-sm-3">
              <ControlLabel>How many bathrooms?</ControlLabel>
            </div>
            <div className="row selectItem">
              <FormControl componentClass="select" placeholder="select">
                <option value="whole">1</option>
                <option value="private">2</option>
                <option value="share">3</option>
              </FormControl>
            </div>
              </FormGroup>
            </div>
    <hr/> */}
            {/* <div className="amenities row roomRow checkBox">
            <div className="roomLabel col-sm-3">
              <label className="formTitle">What amenities do you offer?</label>
            </div>
            <div className="row roomRow col-sm-9 checkItem">
              <Checkbox  check readOnly >
                Wifi
              </Checkbox>
              <Checkbox  check readOnly>
                Heat
              </Checkbox>
              <Checkbox check readOnly>
                Air conditioning
              </Checkbox>
              <Checkbox check readOnly>
                Closet/drawers
              </Checkbox>
              <Checkbox check readOnly>
                Essentials(Towels,bed sheeets,toilet paper and pillows)
              </Checkbox>
              <Checkbox check readOnly>
                pets in the house
              </Checkbox>
              <Checkbox check readOnly>
                private entrance
              </Checkbox>
            </div>
            </div>

            <div className="amenities row roomRow ">
            <div className="roomLabel col-sm-3">
              <label className="formTitle ">What spaces can guests use?</label>
            </div>
            <div className="col-sm-6 row checkItem " > 
              <Checkbox check readOnly >
                Pool
              </Checkbox>
              <Checkbox check readOnly>
                Kitchen
              </Checkbox>
              <Checkbox check readOnly>
                Laundry-washer
              </Checkbox>
              <Checkbox check readOnly>
                Laundry-dryer
              </Checkbox>
              <Checkbox check readOnly>
                Parking    
              </Checkbox>
              <Checkbox check readOnly>
                Elevator
              </Checkbox>
              <Checkbox check readOnly>
                Hot tub
              </Checkbox>
              <Checkbox check readOnly>
                Gym
              </Checkbox>
            </div>
            </div>
    <hr/> */}
    
    // // updload img
// componentDidMount = () => {
//   let user = this.state.user;
//   let photoUrl = user.picture;
//   let id = user.profile_id;

//   if(photoUrl && photoUrl.includes('api/room')){
//       photoUrl = photoUrl.substring(0,photoUrl.indexOf('api')) + photoUrl.substring(photoUrl.indexOf('media'))
//       user.picture = photoUrl
//       this.setState({
//           user: user
//       })
//   }

// }
