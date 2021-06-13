import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'


class Signup extends Component {
    render() {
        return (
            <div className='signup-page'>
                <div className='main-card signup'>
                    <h1>Foodie Friends</h1>
                    <div className='signup-form'>
                        <form>
                            <input type='text' name='username' placeholder='Username' /><br/>
                            <input type='password' name='password' placeholder='Password' /><br/>
                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className='secondary-card login'>
                    Have an account? <Link to="/">Log in</Link>
                </div>
            </div>
        )
    }
}

export default Signup