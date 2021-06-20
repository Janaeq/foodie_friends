import React, { Component } from 'react'

class Searchbar extends Component {
    state = {
        query: ''
    }

    onChange = e => {
        this.setState({ query: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div className='searchbar'>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='query' placeholder='Search' value={this.state.query} onChange={this.onChange} />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default Searchbar