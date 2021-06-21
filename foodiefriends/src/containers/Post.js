import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/timelineAction'
import { loadingData, displayData } from '../actions/loadingAction'
import IngredientDirectionToggler from '../components/IngredientDirectionToggler'

class Post extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.url)
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
            return(
                <div>
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
}

const mapStateToProps = state => {
    return {
        post: state.posts.item,
        loading: state.loading.loading
    }
}


export default connect(mapStateToProps, { fetchPost, loadingData, displayData })(Post)