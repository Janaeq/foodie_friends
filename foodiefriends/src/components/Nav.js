import React from 'react' 
import '../App.css'

const Nav = () => {
    return (
        <nav>
            <div className='logo'>
                <h3>Foodie Friends</h3>
            </div>
            <div className='searchbar'>Searchbar - to search for recipes made by other users </div>
            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>Add Post</li>
                    <li>Profile</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav