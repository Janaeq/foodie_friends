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
        // props: user => id, posts, username
        const user = this.props.user
        return (
            <div className='header'>
            {/* HEADER TO BE SECTIONED FROM */}
                <div className='user-id'>
                    {/* INLINE - PHOTO ON LEFT, USERNAME ON RIGHT */}
                    {/* <img src={user.photo}/> */}
                    <h1>{user.username}</h1>
                </div>
                <div className='stats'>
                    {/* INLINE */}
                    {this.postCount()}
                    {/* user.followers.length */}
                    {/* user.following.length */}
                </div>
                <div className='bio'>
                    {/* user.bio */}
                </div>
            </div>
        )
    }
}

export default ProfileHeader