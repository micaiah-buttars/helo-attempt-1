import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

import Home from './Home/Home'
import NewPost from './NewPost/NewPost'
import Logout from './Logout/Logout'

function Nav(props) {
    console.log(props)
    if(props.location.pathname !== '/'){
        return(
            <div>
                <img src={props.profile_pic}></img>
                <span>{props.username}</span>
                <Home />
                <NewPost />
                <Logout />
            </div>

        )
    } else {
        return null
    }

        
    }
const mapState = (reduxState) => {
    return reduxState
}
export default withRouter(connect(mapState)(Nav))


