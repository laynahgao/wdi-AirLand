import React from 'react';
import axios from 'axios';
import './profile.css'
import ImageUploader from 'react-images-upload';

class Profile extends React.Component {

    state = {
        user: this.props.user,
        pictures: [],
        room: [],
    }
// updload img
    componentDidMount = () => {
        let user = this.state.user;
        let photoUrl = user.picture;
        let id = user.profile_id

        if(photoUrl && photoUrl.includes('api/profile')){
            photoUrl = photoUrl.substring(0,photoUrl.indexOf('api')) + photoUrl.substring(photoUrl.indexOf('media'))
            user.picture = photoUrl
            this.setState({
                user: user
            })
        }
        
// get Profile photo info
        axios.get('http://127.0.0.1:8000/api/profile/rooms/'+ id)
        .then(res => {
            this.setState({room: res.data})
            console.log(res.data)
        })
    
    }
  
    componentDidUpdate = () => { 
        let user = this.state.user;
        let photoUrl = user.picture
        
        if(photoUrl && photoUrl.includes('api/profile')){
            photoUrl = photoUrl.substring(0,photoUrl.indexOf('api')) + photoUrl.substring(photoUrl.indexOf('media'))
            user.picture = photoUrl
            this.setState({
                user: user
            })
        }
        
    }

    handleName = (event) =>{
        let user = this.props.user;
        user.first_name = event.target.value
        this.setState({user: user})
    }

    handleDescription = (event) =>{
        let user = this.state.user;
        user.description = event.target.value
        this.setState({user: user})
    }

    editUser = (event) => {
        event.preventDefault();
        let id = localStorage.getItem('userId') 
        let name = this.refs.firstName.value;
        let des = this.refs.description.value;
        
        var bodyFormData = new FormData();
        bodyFormData.set('profile_id', id)
        bodyFormData.set('first_name', name)
        bodyFormData.set('description', des)
        bodyFormData.set('picture', this.state.pictures[0])
        
        axios.put('http://127.0.0.1:8000/api/profile/'+id, bodyFormData)
        .then(res => {
            let photoUrl = res.data.picture.substring(0,res.data.picture.indexOf('api')) + res.data.picture.substring(res.data.picture.indexOf('media'))
            res.data.picture = photoUrl;
            this.setState({user: res.data})
            this.props.updateUser(res.data)
        })
    };

    onDrop = (picture) => {
        this.setState({
            pictures: this.state.pictures.concat(picture)
        })
    }
    // Profile Room Click
    handleClick = (room) =>{
        // let room_id = this.state.room.id
        console.log (room.id)
        return(
        // // <Link to="/roomdetail/:id"></Link>
        // // <Redirect to="/roomdetail"/>
        this.props.history.push('profileroom/'+ room.id)
        )
    }
// delete User account
    deleteUser =(event)=>{
        event.preventDefault();
        let id = localStorage.getItem('userId') 
        axios.delete('http://127.0.0.1:8000/api/profile/'+ id)
        .then(res => {
        console.log ("delete")
        this.setState({})
    })
    }

    // deleteRoom = (room) => {
    //     let rooms = this.state.room.filter(ele => ele.id !== room.id)
    //     // this.set
    // }

    render(){

        let hostRooms = this.state.room.map(r => {
            let photoUrl = r.room_picture;
            photoUrl = photoUrl.substring(0,photoUrl.indexOf('api')) + photoUrl.substring(photoUrl.indexOf('media'))
            return(
                <div className="rooms-block" onClick={() => this.handleClick(r)}> 
                    <div className="col-lg-3 col-md-5">
                        <div className="rooms-info">
                            <img src={photoUrl} className="img-responsive" alt="img"/>
                            <div className="rooms-txt">
                                <p className="room-title">{r.room_name}</p>
                                <p className="room-city">{r.room_city}</p>
                                <p className="room-price">{r.room_price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return(
        <div id="profile" className="paddsection container">

            <form className="profileForm" onSubmit={this.editUser}>
                <div className="profileHead">
                    <h5 className="profileEdit">Profile Photo</h5>
                </div>
                <div className="profileDetail">
                    <div className="profileRow">
                        <div className="roomPhoto">           
                            <img className="profilePhoto" src={this.state.user.picture} alt="" ></img>
                            <p className="noticeDetail">
                                Clear frontal face photos are an important way for hosts and 
                                guests to learn about each other.
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

                <div className="profileHead">
                    <h5 className="profileEdit">Required</h5>
                </div>

                <div className="ProfileDetail">
                    <div className="row profileRow ">
                    <div className="profileLabel col-sm-3">
                        <label>First Name:</label>
                    </div>
                    <div className="profileInput col-sm-9">
                        <input value={this.state.user.first_name} onChange={this.handleName} type="text" ref="firstName"></input>
                    </div>
                </div>

                <div className="row profileRow">
                    <div className="profileLabel col-sm-3">
                        <label>Email:</label>
                    </div>
                    <div className="profileInput col-sm-9">
                        <input value={this.state.user.email} type="text" ref="email"></input>
                    </div>
                </div>

                <div className="row profileRow">
                    <div className="profileLabel col-sm-3">
                        <label>Describe Yourself:</label>
                    </div>
                    <div className="profileInput col-sm-9">
                        <textarea value={this.state.user.description} onChange={this.handleDescription} type="text" ref="description" placeholder=" "></textarea>
                    </div>
                </div>
                </div>
                <div className="col-lg-12 buttons">
                        <button type="submit" name="submit" className="profileButton saveButton">Save</button>
                        <button type="submit" value="Delete" onClick={this.deleteUser} name="submit" className="profileButton">Delete</button>

                    </div>
            </form>
            {/* room list  */}


                <div className="profileRoom">
                    <div className="">
                         <p>Hosted ROOMS</p>
                    </div>  
                    <div className="pointer">
                         {hostRooms}
                    </div>
            </div>
        </div>
    )
}
}

export default Profile