import React, { Component } from 'react'
import UserPosts from '../components/UserPosts'
import LikedPosts from '../components/LikedPosts'

class ProfileGrid extends Component {
    state = {
        gridPostsClicked: true,
        likedPostsClicked: false
    }
    
    handleGridClick = () => {
        this.setState({
            gridPostsClicked: true,
            likedPostsClicked: false
        })
    }

    handleLikedClick = () => {
        this.setState({
            gridPostsClicked: false,
            likedPostsClicked: true
        })
    }

    renderPosts = () =>{
        if (this.state.gridPostsClicked === true) {
            return <UserPosts user={this.props.user} />
        } else {
            return <LikedPosts user={this.props.user} />
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className='grid-display-toggler'>
                    <button className='profile-grid' value={this.state.gridPostsClicked} onClick={this.handleGridClick} name='grid-posts'>Grid Posts</button>
                    <button className='liked-posts' value={this.state.likedPostsClicked} onClick={this.handleLikedClick} name='liked-posts'>Liked Posts</button>
                </div>
                {this.renderPosts()}
            </div>
        )
    }
}

export default ProfileGrid