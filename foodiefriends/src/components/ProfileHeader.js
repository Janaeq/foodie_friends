import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProfileHeader extends Component {
    render() {
        const user = this.props.user
        return (
            <div className='header'>
                <div className='user-id'>
                    <img src={user.img} alt='user' />
                    <p>{user.username}</p>
                    <Link to='/edit_profile'>
                    <button className='edit-profile'>Edit Profile</button>
                    </Link>
                </div>
                <div className='bio'>
                    <p>{user.first_name} {user.last_name}</p>
                    <p>{user.bio}</p>
                </div>
                <div className='stats'>
                    <p>{user.posts.length} posts</p>
                </div>
            </div>
        )
    }
}

export default ProfileHeader