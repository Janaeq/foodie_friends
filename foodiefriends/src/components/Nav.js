import React from 'react' 
import '../App.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    const navStyle = {
        color: 'white'
    }
    
    const handleLogout= () => {
        localStorage.removeItem('token')
    }

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
                    <Link to='/home' style={navStyle}>
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/newpost">
                        <li>Add Post</li>
                    </Link>
                    <Link to='/profile' style={navStyle}>
                        <li>Profile</li>
                    </Link>
                    <Link to='/' style={navStyle} onClick={handleLogout}>
                        <li>Log Out</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav