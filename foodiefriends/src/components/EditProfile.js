import React, { Component } from 'react'

class EditProfile extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div className='edit-profile'>
                <h1>Edit Profile</h1>
                <form>
                    <input type='text' name='photo' placeholder='Photo' /><br/>
                    <input type='text' name='first_name' placeholder='First Name' /><br/>
                    <input type='text' name='last_name' placeholder='Last Name' /><br/>
                    <input type='text' name='bio' placeholder='Bio' /><br/>
                    <button type='submit'>Done</button>
                </form>
            </div>
        )
    }
}

export default EditProfile