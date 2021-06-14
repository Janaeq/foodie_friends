import React, {Component} from 'react'
import Nav from '../components/Nav'
import ProfileHeader from '../components/ProfileHeader'
import ProfileGrid from './ProfileGrid'

class Profile extends Component {
    render() {
        return (
            <div>
                <Nav />,
                <ProfileHeader />
                <ProfileGrid />
            </div>
        )
    }
}

export default Profile