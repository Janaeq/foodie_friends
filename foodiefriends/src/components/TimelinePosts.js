import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/timelineAction'
import IngredientDirectionToggler from './IngredientDirectionToggler'

class TimelinePosts extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id} className='timeline-posts'>
                <img 
                    src={post.img} 
                    style={{
                        height: "514px",
                        width: "411px"
                    }}
                />
                <div className='user-interaction'>
                    <div className='like'>
                        {/* like component */}
                    </div>
                </div>
                <div className='ingredient-direction-toggler'>
                    <IngredientDirectionToggler post={post}/>
                </div>
            </div>
        ))
        return (
            <div>
                {postItems}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.items,
        newPost: state.posts.item
    }
}

export default connect(mapStateToProps, { fetchPosts })(TimelinePosts)