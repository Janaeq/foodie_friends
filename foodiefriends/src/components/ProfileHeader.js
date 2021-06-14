import React, { Component } from 'react'

class ProfileHeader extends Component {
    render() {
        return (
            <div className='header'>
                <div className='user-id'>
                    <p>User pfp</p>
                    <p>User username</p>
                    <p>link to edit user profile</p>
                </div>
                <div className='bio'>
                    <p>User name</p>
                    <p>User bio</p>
                </div>
                <div className='stats'>
                    <p>User post count</p>
                    <p>User liked posts</p>
                </div>
                <div className='grid-display-btns'>
                    <p>link to display grid posts </p>
                    <p>link to display liked posts</p>
                </div>
            </div>
        )
    }
}

export default ProfileHeader 