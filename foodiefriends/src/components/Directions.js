import React, { Component } from 'react'

class Directions extends Component {
    render() {
        const directionsList = this.props.directions.map((step, i) => (
            <div key={step.id} className='direction'>
                <strong>Step {i + 1}:</strong> {step.direction}
                <br></br><br></br>
            </div>
        ))
        return(
            <div>{directionsList}</div>
        )
    }
}

export default Directions