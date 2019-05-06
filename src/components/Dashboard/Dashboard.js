import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            myPosts: true,
            posts: []

        }
        this.getPosts = this.getPosts.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    componentDidMount() {
        this.getPosts();
      }
    getPosts() {
        let { search, myPosts } = this.state;
        let url = `/api/posts/${this.props.id}`;
        if (myPosts && !search) {
          url += '?myPosts=true';
        } else if (!myPosts && search) {
          url += `?search=${search}`;
        } else if (myPosts && search) {
          url += `?myPosts=true&search=${search}`;
        }

        console.log(url)
        return axios.get(url)
          .then(res => {
            this.setState({
                posts: res.data
            })
          })
      }
    reset() {
        let { myPosts } = this.state;
        let url = `/posts/${this.props.id}`;
        if (myPosts) {
          url += '?myPosts=true';
        }
        axios.get(url)
          .then(res => {
            this.setState({ posts: res.data, search: '' })
          })
      }
    render(){
        console.log(this.state)
        return (
            <div>
                <span>Dashboard</span>
                <input onChange={this.handleChange}/>
                <button>Search</button>
                <button>Reset</button>

                <label>
                    My Posts
                    <input type='checkbox' checked={this.state.myPosts} onChange={_ => this.setState({myPosts: !this.state.myPosts}, this.getPosts)}/>
                </label>
                
                {this.state.posts.map((post, i) => {
                    return <div key={i}>
                        <h2>{post.title}</h2>
                        <span>{post.username}</span>
                        <img src={post.profile_pic}/>
                    </div>
                })}




            </div>
        )
    }
}
const mapState = (reduxState) => {
    return reduxState
}

export default connect(mapState)(Dashboard)