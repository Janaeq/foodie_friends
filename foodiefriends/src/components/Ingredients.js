import React, { Component } from 'react'

class Ingredients extends Component {
    render() {
        const ingredientsList = this.props.ingredients.map(ingr => (
            <div key={ingr.id} className='ingredient'>
                <li>{ingr.ingredient}</li>
                <br></br>
            </div>
    ))
        return (
            <div>{ingredientsList}</div>
        )
    }
}

export default Ingredients