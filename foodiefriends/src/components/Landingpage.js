import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className='landing-page'>
                <div className='container main' >
                    <div className='title'>
                    <br/>
                        <h1>Foodie Friends</h1>
                    </div>
                    <div className='about'>
                        <h3>A place to share your most delicious recipes with all of your friends!</h3>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div className='auth-links'>
                        <Link to='/login'>
                            <button className='login-btn'>Log In</button>
                        </Link>
                        <br /><br/>
                        <div className='sign-up-link'>
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage