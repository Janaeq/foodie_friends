import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'


class Welcome extends Component {
    state = {
        username: '',
        password: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }
        // this.props includes fetchlogin
        this.props.handleSubmit(user)
    }

    render() {
        return (
            <div className='welcome'>
                <div className='Carousel'></div>
                <div className='main-card login'>
                    <h1>Foodie Friends</h1>
                    <div className='login-form'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.onChange} /><br/>
                            <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onChange} /><br/>
                            <button type='submit'>Log In</button>
                        </form>
                    </div>
                </div>
                <div className='secondary-card signup'>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        )
    }
}

export default Welcome