import React, {Component} from 'react'

import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Post from './components/Post/Post'

import {Switch, Route} from 'react-router-dom'

export default class Routes extends Component {

    render(){
        return(
            <Switch>
                <Route component={Auth} exact path='/'/>
                <Route component={Dashboard} path='/dashboard'/>
                <Route component={Form} path='/new'/>
                <Route component={Post} path='/post/:postid'/>
            </Switch>

        )
    }

}