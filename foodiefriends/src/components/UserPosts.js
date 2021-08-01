import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

class UserPosts extends Component {
    render() {

        const userPosts = this.props.user.posts.reverse().map(post => (
            <div key={post.id} className='grid-img' onClick={this.onClick} >
                <Link to={{pathname: `/posts/${post.id}`}}>
                    <img
                        src={post.img} 
                        style={{
                            height: "300px",
                            width: "225px"
                        }}
                    />
                </Link>
            </div>
        ))
        return (
            <div className='user-posts'>
                <div className='grid'>
                    {userPosts}
                </div>
            </div>
        )
    }
}

export default UserPosts 