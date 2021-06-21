import React, { Component, useReducer } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/timelineAction'
import Nav from '../components/Nav'
import IngredientDirectionToggler from '../components/IngredientDirectionToggler'

class Post extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.url)
    }

    render() {
        if (this.props.loading === true) {
            return (
                <div>
                    <Nav />
                    <h1>Loading...</h1>
                </div>
            )
        }
        const post = this.props.post
        return(
            <div>
                <Nav />
                <div className='show-post'>
                    <h1>{post.name} </h1><p>by {post.user.username}</p>
                    <div className='container'>
                        <div className='row'>
                            <div className='column'>
                                <img src={post.img} alt={post.name} style={{ height: "514px", width: "411px" }}/>
                            </div>
                            <div className='column'>
                                <IngredientDirectionToggler post={post}/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.posts.item,
        loading: state.posts.loading
    }
}


export default connect(mapStateToProps, { fetchPost })(Post)