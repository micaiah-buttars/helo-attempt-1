import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Logout extends Component {
    render(){
        return (
            <div>
                <Link to='/'>Logout</Link>
            </div>
        )
    }
}