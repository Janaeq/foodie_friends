import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/loggedAction'
import Nav from '../components/Nav'
import ProfileHeader from '../components/ProfileHeader'
import ProfileGrid from './ProfileGrid'

class Profile extends Component {
    componentDidMount() {
        this.props.getProfile()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Nav />,
                <ProfileHeader />
                <ProfileGrid />
            </div>
        )
    }
}

export default connect(null, { getProfile })(Profile)