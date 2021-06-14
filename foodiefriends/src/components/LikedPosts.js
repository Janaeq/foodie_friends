import React, { Component } from 'react' 

class LikedPosts extends Component {
    state = {
        posts: []
    }

    render() {
        return (
            <div className='liked-posts'>
                <p>on liked posts click display liked posts</p>
            </div>
        )
    }
}

export default LikedPosts 