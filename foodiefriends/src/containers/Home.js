import React, {Component} from 'react'
import Nav from '../components/Nav'
import TimelinePosts from '../components/TimelinePosts'
class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Nav />,
                <TimelinePosts />
            </div>
        )
    }
}

export default Home