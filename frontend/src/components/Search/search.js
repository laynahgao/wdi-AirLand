import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import axios from 'axios';

const KEYS_TO_FILTERS = ['room.room_city']

class Search extends Component{

      state = {
        rooms: []
    }
    
    constructor (props) {
        super(props)
        this.state = {
          searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
      }

      componentDidMount = () =>{
        axios.get('http://127.0.0.1:8000/api/room/')
        .then(response => {
            console.log(response.data)
            this.setState({rooms: response.data})
        })
    }


    render(){
        const filteredRooms = room.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <div>
              <SearchInput className="search-input" onChange={this.searchUpdated} />
              {filteredRooms.map(rooms => {
                return (
                  <div className="mail" key={room.room_city}>
                  </div>
                )
              })}
            </div>
          )
        }
      
        searchUpdated (term) {
          this.setState({searchTerm: term})
        }
      }
export default Search
