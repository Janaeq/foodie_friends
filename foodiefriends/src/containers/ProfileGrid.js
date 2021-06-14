import React, { Component } from 'react'
import UserPosts from '../components/UserPosts'
import LikedPosts from '../components/LikedPosts'

class ProfileGrid extends Component {
    render() {
        return (
            <div>
                <UserPosts />,
                <LikedPosts />
            </div>
        )
    }
}

export default ProfileGrid