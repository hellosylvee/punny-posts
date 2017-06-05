import React, { Component } from 'react'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }

  render(){
    return(
      <form className='form'>
        <div>Enter a pun</div>
        <textarea placeholder="Enter your pun here"></textarea>
        <button>Submit Pun</button>
      </form>
    )
  }
}

export default Form
