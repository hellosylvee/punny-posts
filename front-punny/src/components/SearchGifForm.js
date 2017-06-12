import React, { Component } from 'react'

class SearchGifForm extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }

  handleChange(e){
    this.setState({ input: e.target.value })
  }

  handleSearchGif(e){
    e.preventDefault()
    this.props.onSubmit(this.state.input)
    this.setState({ input: '' })
  }

  render(){
    return(
      <div>
        <form className='search' onSubmit={this.handleSearchGif.bind(this)}>
          <input type="text" placeholder="Search for a gif" onChange={this.handleChange.bind(this)}/>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchGifForm
