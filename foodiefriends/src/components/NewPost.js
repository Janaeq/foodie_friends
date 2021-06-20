import React, { Component } from 'react' 
import { connect } from 'react-redux'
import Nav from './Nav'
import { createPost } from '../actions/timelineAction'

class NewPost extends Component {
    state = {
        img: null,
        name: '',
        directions: '',
        ingredients: ''
    }

    onImgChange = e => {
        this.setState({
            img: URL.createObjectURL(e.target.files[0])
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.createPost(this.state, this.props.history)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div>
                <Nav />
                <div className='new-post'>
                    <h1>New Post</h1>
                    <form onSubmit={this.onSubmit}>
                        <label>Upload Image: </label>
                        <input type='file' accept="image/*" multiple={false} onChange={this.onImgChange} name='photo'/>
                        <img 
                            src={this.state.img} 
                            style={{
                                height: "90px",
                                width: "70px"
                            }}
                        /><br/><br/>
                        <label>Name: </label>
                        <input type='text' name='name' onChange={this.onChange} value={this.state.name} /><br/>
                        <label>Directions: </label>
                        <textarea name='directions' onChange={this.onChange} value={this.state.directions} /><br/>
                        <label>Ingredients: </label>
                        <textarea name='ingredients' onChange={this.onChange} value={this.state.ingredients} /><br/>
                        <button type='submit'>Post!</button>
                        <br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { createPost })(NewPost)