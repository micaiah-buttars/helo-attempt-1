import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {credential} from '../../ducks/reducer'

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    login = async () => {
        const {username, password} = this.state
        let data = await axios.post('/api/auth/login', {username, password}).then(res => res.data)
        this.props.credential(data)
    }
    register = async () => {
        const {username, password} = this.state
        let data = await axios.post('/api/auth/register', {username, password}).then(res => res.data)
        this.props.credential(data)
        data.redirect('/dashboard')
            
    }
    render(){
        console.log(this.state)
        return (
            <div>
                <div>Auth</div>
                <input name='username' placeholder='username' onChange={this.handleChange}/>
                <input name='password' placeholder='password' onChange={this.handleChange}/>
                <button onClick={this.register}>Register</button>
                <button onClick={this.login}>Login</button>
            </div>

        )
    }
}

// const mapState = (reduxState) => {
//     return reduxState
// }
export default connect(null, {credential})(Auth)

