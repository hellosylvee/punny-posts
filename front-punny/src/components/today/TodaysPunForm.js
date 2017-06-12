import React, { Component } from 'react'

class TodaysPunForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
  }

  handleInputChange(e){
    this.setState({ input: e.target.value })
  }

  handleAddPun(e){
    e.preventDefault()
    this.props.onSubmit(this.state.input)
    this.setState({ input: '' })
  }

  render(){
    // console.log('TODAYS PUNS FORM', this.state)
    return(
      <form className='form' onSubmit={this.handleAddPun.bind(this)}>
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

export default TodaysPunForm
