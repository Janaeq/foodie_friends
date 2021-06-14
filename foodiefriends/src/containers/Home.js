import React, {Component} from 'react'
import Nav from '../components/Nav'

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <Nav />
            // <Timeline />
        )
    }
}

export default Home