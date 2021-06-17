import React, { Component } from 'react'

class ProfileHeader extends Component {
    render() {
        const user = this.props.user
        return (
            <div className='header'>
                <div className='user-id'>
                    <img src={user.img} />
                    <p>{user.username}</p>
                    <button className='edit-profile'>Edit Profile</button>
                </div>
                <div className='bio'>
                    <p>{user.first_name} {user.last_name}</p>
                    <p>{user.bio}</p>
                </div>
                <div className='stats'>
                    <p>{user.posts.length} posts</p>
                </div>
                <div className='grid-display-toggler'>
                    <button className='profile-grid'>Grid</button>
                    <button className='liked-posts'>Liked Posts</button>
                </div>
            </div>
        )
    }
}

export default ProfileHeader 