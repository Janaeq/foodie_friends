import React, { Component } from 'react'

class Directions extends Component {
    render() {
        return(
            <div>{this.props.post.directions}</div>
        )
    }
}

export default Directions