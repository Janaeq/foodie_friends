import React, { Component } from 'react'

class TimelinePosts extends Component {

    render() {
        console.log(this.props.posts)
        const posts = this.props.posts.map(post => (
            <div key={post.id} className='post-card'>
                <div className='post-header'>
                    {/* where is the user profile pic? */}
                    <h4>{post.name}</h4>
                    <p>by - {post.user.username}</p>
                </div>
                <div className='post-img'>
                    <p>{post.img}</p>
                </div>
                <div className='actions'>
                    <button className='like'>Like</button>
                    <button className='ingredients'>Ingredients</button>
                    <button className='directions'>Directions</button>
                    <p>ingredients or directions</p> {/* implement toggler here */}
                </div>
            </div>
        ))
        return (
            <div>
                { posts }
            </div>
        )
    }
}

export default TimelinePosts