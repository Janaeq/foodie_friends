import React from 'react' 
import '../App.css'

const Nav = () => {
    return (
        <nav>
            <div className='logo'>
                <h3>Foodie Friends</h3>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>Add Post</li>
                    <li>Home</li>
                    <li>Notifications</li>
                    <li>Profile</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav