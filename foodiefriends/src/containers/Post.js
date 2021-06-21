import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/timelineAction'
import Nav from '../components/Nav'
import IngredientDirectionToggler from '../components/IngredientDirectionToggler'

class Post extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.url)
    }

    render() {
        const post = this.props.post
        console.log(post) //post is an object
        return(
            <div>
                <Nav />
                <div className='show-post'>
                    <h1>{post.name} </h1><p>by </p>
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
        post: state.posts.items
    }
}


export default connect(mapStateToProps, { fetchPost })(Post)