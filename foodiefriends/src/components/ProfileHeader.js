import React, { Component } from 'react'

class ProfileHeader extends Component {
    postCount = () => {
        const user = this.props.user
        if (user.posts.length === 1) {
            return <p>{user.posts.length} post</p>
        } else {
            return <p>{user.posts.length} posts</p>
        }
    }
    render() {
        console.log(this.props)
        const user = this.props.user
        return (
            <div className='header'>
                <div className='user-id'>
                    <h1>Posts by {user.username}</h1>
                </div>
                <div className='stats'>
                    {this.postCount()}
                </div>
            </div>
        )
    }
}

export default ProfileHeader