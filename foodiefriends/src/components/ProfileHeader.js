import React, { Component } from 'react'

class ProfileHeader extends Component {
    render() {
        console.log(this.props)
        const user = this.props.user
        return (
            <div className='header'>
                <div className='user-id'>
                    <p>Posts by {user.username}</p>
                </div>
                <div className='stats'>
                    <p>{user.posts.length} posts</p>
                </div>
            </div>
        )
    }
}

export default ProfileHeader