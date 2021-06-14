import React, {Component} from 'react'
import { connect } from 'react-redux'

import Nav from '../components/Nav'
import TimelinePosts from '../components/TimelinePosts'

import fetchPosts from '../actions/timelineAction'
class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <Nav />,
                <TimelinePosts posts={this.props.posts} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        post: state.posts.post
    }
}

export default connect(mapStateToProps, { fetchPosts })(Home)