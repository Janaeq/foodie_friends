import React from 'react' 
import '../App.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <div className='logo'>
                <h3>Foodie Friends</h3>
            </div>
            <div className='searchbar'>Searchbar - to search for recipes made by other users </div>
            <div className='nav-links'>
                <ul className='nav-links'>
                    <Link to='/home' style={navStyle}>
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="#">
                        <li>Add Post</li>
                    </Link>
                    <Link to='/profile' style={navStyle}>
                        <li>Profile</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav