import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

class Signup extends Component {
    state = {
        username: '',
        password: '',
        img: '',
        first_name: '',
        last_name: '',
        bio: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    render() {
        return (
            <div className='signup-page'>
                <div className='main-card signup'>
                    <h1>Foodie Friends</h1>
                    <div className='signup-form'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.onChange} /><br/>
                            <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onChange} /><br/>
                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className='secondary-card login'>
                    Have an account? <Link to="/login">Log in</Link>
                </div>
            </div>
        )
    }
}

export default Signup