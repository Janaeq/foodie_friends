import React, { Component } from 'react'

class Ingredients extends Component {
    render() {
        return (
            <div>{this.props.post.ingredients}</div>
        )
    }
}

export default Ingredients