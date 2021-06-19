import React, { Component } from 'react' 

class UserPosts extends Component {
    render() {
        console.log(this.props.user.posts[0])
        const userPosts = this.props.user.posts.map(post => (
            <div key={post.id} className='grid-img' onClick={this.onClick} >
                <p>{post.name}</p>
                <p>{post.img}</p>
                <p>{post.directions}</p>
                <p>{post.ingredients}</p>
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