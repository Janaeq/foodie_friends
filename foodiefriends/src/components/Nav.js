import React, { Component } from 'react' 
import '../App.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        const navStyle = {
            color: 'white'
        }
        
        if (this.props.isLoggedIn === true) {
            return (
                <nav>
                    <div className='logo'>
                        <h3>Foodie Friends!</h3>
                        <div className='sublogo'>
                            <h5>Share your favorite recipies</h5>
                        </div>
                    </div>
                    <div className='nav-links'>
                        <ul className='nav-links'>
                            <Link className='nav-link' to='/home' style={navStyle}>
                                <li>Home</li>
                            </Link>
                            <Link className='nav-link' style={navStyle} to="/newpost">
                                <li>Add Post</li>
                            </Link>
                            <Link className='nav-link' to='/profile' style={navStyle}>
                                <li>Profile</li>
                            </Link>
                            <Link className='nav-link' to='/' style={navStyle} onClick={this.props.handleLogout}>
                                <li>Log Out</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return <div></div>
        }
    }
}

export default Nav