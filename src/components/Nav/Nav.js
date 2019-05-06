import React, {Component} from 'react'
import {connect} from 'react-redux'

import Home from './Home/Home'
import NewPost from './NewPost/NewPost'
import Logout from './Logout/Logout'

class Nav extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <img src={this.props.profile_picture}></img>
                <span>{this.props.username}</span>
                <Home />
                <NewPost />
                <Logout />
            </div>

        )
    }
}
const mapState = (reduxState) => {
    return reduxState
}
export default connect(mapState)(Nav)


