import React, {Component} from 'react'
import TimelinePosts from '../components/TimelinePosts'
class Home extends Component {

    render() {
        // no props
        return (
            <div>
                <TimelinePosts />
            </div>
        )
    }
}

export default Home