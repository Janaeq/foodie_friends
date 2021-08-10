import React, { Component } from 'react'
import { connect } from 'react-redux'
import Directions from './Directions'
import Ingredients from './Ingredients'
import { displayContent } from '../actions/toggleAction'

class IngredientDirectionToggler extends Component {
    onClick = e => {
        this.props.displayContent(e.target)
    }

    renderContent = () => {
        if (this.props.directions === true) {
            return <Directions directions={this.props.post.directions} />
        } else if (this.props.ingredients === true) {
            return <Ingredients ingredients={this.props.post.ingredients} />
        } 
    }

    render() {
        return (
            <div className='ingredient-direction-toggler'>
                <div className='toggler-btn'>
                    <button className='ingredients-btn' name='ingredients' value={this.props.ingredients} onClick={this.onClick}>Ingredients</button>
                    <button className='directions-btn' name='directions' value={this.props.directions} onClick={this.onClick}>Directions</button>
                </div>
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.postToggler.ingredientsClicked,
        directions: state.postToggler.directionsClicked,
        hide: state.postToggler.hide
    }
}

export default connect(mapStateToProps, { displayContent })(IngredientDirectionToggler)