import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class NewPost extends Component {
    render(){
        return (
            <div>
                <Link to='/new'>New Post</Link>
            </div>
        )
    }
}