import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/timelineAction'
import { loadingData, displayData } from '../actions/loadingAction'
import IngredientDirectionToggler from '../components/IngredientDirectionToggler'

class Post extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.url)
    }

    deletePostBtn() {
        if (this.props.user.username === this.props.post.user.username) {
                return (
                    <div className='delete-post-btn'>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                )
        }
    }

    deletePost() {
        console.log('deleting')
    }

    render() {
        if (this.props.loading === true) {
            return (
                <div>
                    <h1>Loading...</h1>
                    {this.props.displayData()}
                </div>
            )
        } else {
            const post = this.props.post
            const user = post.user
            return(
                <div>
                    <div className='show-post'>
                        <div className='post-header'>
                            <div className='post-name'><h1>{post.name} </h1></div>
                            <div className='post-delete-btn' onClick={this.deletePost}>{this.deletePostBtn()}</div>
                            <div className='post-user'><p> by {user.username}</p></div>
                        </div>
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
}

const mapStateToProps = state => {
    return {
        post: state.posts.item,
        loading: state.loading.loading
    }
}


export default connect(mapStateToProps, { fetchPost, loadingData, displayData })(Post)