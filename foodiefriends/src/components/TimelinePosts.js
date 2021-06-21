import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/timelineAction'
import { Link } from 'react-router-dom'

class TimelinePosts extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id} className='timeline-posts'>
                <Link to={{pathname: `/posts/${post.id}`}}>
                <img 
                    src={post.img} 
                    style={{
                        height: "514px",
                        width: "411px"
                    }}
                />
                </Link>
                <div className='ingredient-direction-toggler'>
                    <h3>{post.name}</h3>
                    <p>by {post.user.username}</p>
                </div>
            </div>
        ))
        return (
            <div>
                {postItems}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.items,
        newPost: state.posts.item
    }
}

export default connect(mapStateToProps, { fetchPosts })(TimelinePosts)