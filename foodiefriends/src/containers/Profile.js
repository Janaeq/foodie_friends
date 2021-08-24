import React, {Component} from 'react'
import { connect } from 'react-redux'
import ProfileHeader from '../components/ProfileHeader'
import UserPosts from '../components/UserPosts'

class Profile extends Component {
// IMPLEMENT LOADING FOR PROFILE
    render() {
        // props: {user => id, posts, username}, loading: {}
        console.log(this.props)
        return (
            <div>
            {/* remove nav */}
                <ProfileHeader user={this.props.user}/>
                <UserPosts user={this.props.user}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Profile)