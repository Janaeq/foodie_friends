import React, {Component} from 'react'
import Nav from '../components/Nav'
import ProfileHeader from '../components/ProfileHeader'
import ProfileGrid from './ProfileGrid'

class Profile extends Component {

    render() {
        const user = this.props.user
        return (
            <div>
                <Nav />
                <ProfileHeader user={user}/>
                <ProfileGrid user={user}/>
            </div>
        )
    }
}

export default Profile