import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className='landing-page'>
                <div className='carousel'></div>
                <div className='main'>
                    <div className='title'>
                        <h1>Foodie Friends</h1>
                    </div>
                    <div className='about'>
                        <h3>A place to share your most delicious recipes with all of your friends!</h3>
                    </div>
                    <div className='auth-links'>
                        <Link to='/login'>
                            <button className='login-btn'>Log In</button>
                        </Link>
                        <br />
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage