import React, { Component } from 'react'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }

  handleInputChange(e){
    this.setState({ input: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state.input)
    this.setState({ input: '' })
  }

  render(){
    return(
      <form className='form' onSubmit={this.handleSubmit.bind(this)}>
        <div>Enter a pun</div>
        <textarea
          placeholder="Enter your pun here"
          onChange={this.handleInputChange.bind(this)}>
        </textarea>
        <button>Submit Pun</button>
      </form>
    )
  }
}

export default Form
