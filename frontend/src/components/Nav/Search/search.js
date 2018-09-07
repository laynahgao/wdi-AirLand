import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import axios from 'axios';


class Search extends Component{

    constructor (props) {
        super(props)
        this.state = {
          searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
      }

    componentDidMount = () => {
        axios.get('http://127.0.0.1:8000/api/room/')
        .then(res => {
            this.setState({room: res.data})
            console.log(res.data)
        })
        const KEYS_TO_FILTERS = ['room.room_city']
    }

    render(){
        // const filteredEmails = room.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(
            <div>
                Search
            </div>
        )
    }
}
export default Search
