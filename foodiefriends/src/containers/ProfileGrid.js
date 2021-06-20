import React, { Component } from 'react'
import UserPosts from '../components/UserPosts'
import LikedPosts from '../components/LikedPosts'
import { connect } from 'react-redux'
import { renderPosts } from '../actions/toggleAction'

class ProfileGrid extends Component {

    handleClick = e => {
        this.props.renderPosts(e.target)
    }

    renderPosts = () =>{
        if (this.props.userPosts === true) {
            return <UserPosts user={this.props.user} />
        } else {
            return <LikedPosts user={this.props.user} />
        }
    }

    render() {
        return (
            <div>
                <div className='grid-display-toggler'>
                    <button className='user-posts' value={this.props.userPosts} onClick={this.handleClick} name='user-posts'>User Posts</button>
                    <button className='liked-posts' value={this.props.likedPosts} onClick={this.handleClick} name='liked-posts'>Liked Posts</button>
                </div>
                {this.renderPosts()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userPosts: state.gridToggler.userPostsClicked,
        likedPosts: state.gridToggler.likedPostsClicked
    }
}

export default connect(mapStateToProps, { renderPosts })(ProfileGrid)