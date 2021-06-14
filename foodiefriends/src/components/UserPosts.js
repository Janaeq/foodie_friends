import React, { Component } from 'react' 

class UserPosts extends Component {
    state = {
        posts: []
    }

    render() {
        return (
            <div className='user-posts'>
                <p>on initial display and on grid btn click display user posts</p>
            </div>
        )
    }
}

export default UserPosts 