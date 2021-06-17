import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/timelineAction'

class TimelinePosts extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <div className='post-header'>
                    <div className='user-img'>
                        {/* post.user.img */}
                    </div>
                    <div className='post-user'>
                        {post.user.username}
                    </div>
                    <div className='post-options'>
                        {/* new component */}
                    </div>
                </div>
                <div className='post-img'>
                    {post.img}
                </div>
                <div className='user-interaction'>
                    <div className='like'>
                        {/* like component */}
                    </div>
                    <div className='toggler'>
                        {/* toggler component */}
                    </div>
                </div>
                <div className='post-title'>
                    {post.name}
                </div>
                <div className='ingredient-direction'>
                    <div className='ingredient'>
                        {post.ingredients}
                    </div>
                    <div className='directions'>
                        {post.directions}
                    </div>
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