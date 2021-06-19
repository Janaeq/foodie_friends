import React, { Component } from 'react' 

class UserPosts extends Component {
    render() {
        const userPosts = this.props.user.posts.map(post => (
            <div key={post.id} className='grid-img'>
                <p>{post.img}</p>
            </div>
        ))
        return (
            <div className='user-posts'>
                {userPosts}
            </div>
        )
    }
}

export default UserPosts 