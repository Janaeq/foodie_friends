import React, {Component} from 'react'
import Nav from '../components/Nav'
import ProfileHeader from '../components/ProfileHeader'
import UserPosts from '../components/UserPosts'

class Profile extends Component {

    render() {
        const user = this.props.user
        return (
            <div>
                <Nav />
                <ProfileHeader user={user}/>
                <UserPosts user={user}/>
            </div>
        )
    }
}

export default Profile