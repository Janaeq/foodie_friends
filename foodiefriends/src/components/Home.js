import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='Carousel'></div>
                <div className='login-card'>
                    <h1>Foodie Friends</h1>
                    <div className='login-form'>
                        <form>
                            <input type='text' name='username' placeholder='Username' /><br/>
                            <input type='password' name='password' placeholder='Password' /><br/>
                            <button type='submit'>Log In</button>
                        </form>
                    </div>
                </div>
                <div className='signup-card'>
                    <Link to='/signup'>
                        <button className='signup-btn'>Sign Up</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home