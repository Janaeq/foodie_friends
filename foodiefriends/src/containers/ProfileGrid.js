import React, { Component } from 'react'
import UserPosts from '../components/UserPosts'
import LikedPosts from '../components/LikedPosts'

class ProfileGrid extends Component {
    handleClick = (e) => {
        if (e.target.name === 'grid-posts') {
            console.log('Grid is clicked')
        } else {
            console.log('liked is clicked')
        }
    }
    
    render() {
        return (
            <div>
                <div className='grid-display-toggler'>
                    <button className='profile-grid' onClick={this.handleClick} name='grid-posts'>Grid Posts</button>
                    <button className='liked-posts' onClick={this.handleClick} name='liked-posts'>Liked Posts</button>
                </div>
                <UserPosts/>
                <LikedPosts/>
                {/* create a toggler component that will contain 'display: false' state so that when the user clicks on liked post button, liked posts will display
                want to also use this toggler component with displaying directions vs ingredients on individual posts. */}
            </div>
        )
    }
}

export default ProfileGrid