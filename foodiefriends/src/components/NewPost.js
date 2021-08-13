import React, { Component } from 'react' 
import { connect } from 'react-redux'
import Nav from './Nav'
import { createPost } from '../actions/timelineAction'

class NewPost extends Component {
    state = {
        img: '',
        name: '',
        directions: '',
        ingredients: ''
    }

    onSubmit = e => {
        // onSubmit make sure all input fields do not change 
        e.preventDefault()
        this.props.createPost(this.state, this.props.history)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addInput = e => {
        // onClick add another input field 
        debugger
        console.log(e.target)
    }

    render() {
        return(
            <div>
                <Nav />
                <div className='show-post'>
                    <h1>New Post</h1>
                    <div className='container'>
                    <form onSubmit={this.onSubmit}>
                        <label>Upload Image: </label>
                        <input type='text' name='img' onChange={this.onChange} value={this.state.img} /><br/>
                        <label>Name: </label>
                        <input type='text' name='name' onChange={this.onChange} value={this.state.name} /><br/>
                        <label>Directions: </label>
                        <input type='text' name='directions' onChange={this.onChange} value={this.state.directions} />
                        <button type='button' className='add-input' name='addDirection' onClick={this.addInput} value={this.state.add}>+</button>
                        <br/>
                        <label>Ingredients: </label>
                        <input name='ingredients' onChange={this.onChange} value={this.state.ingredients} />
                        <button type='button' className='add-input' name='addIngredient' onClick={this.addInput} value={this.state.add}>+</button>
                        <br/>
                        <button type='submit'>Post!</button>
                        <br/>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { createPost })(NewPost)