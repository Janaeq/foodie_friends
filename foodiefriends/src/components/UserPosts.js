import React, { Component } from 'react' 
import IngredientDirectionToggler from './IngredientDirectionToggler'

class UserPosts extends Component {
    render() {

        const userPosts = this.props.user.posts.map(post => (
            <div key={post.id} className='grid-img' onClick={this.onClick} >
                <img 
                    src={post.img} 
                    style={{
                        height: "514px",
                        width: "411px"
                    }}
                />
                <IngredientDirectionToggler post={post}/>
            </div>
        ))
        return (
            <div className='user-posts'>
                {userPosts}
            </div>
        )
    }
}

export default UserPosts 