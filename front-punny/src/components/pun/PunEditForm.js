import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class PunEditForm extends Component {
  constructor(){
    super()
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
    return(
      <Form onSubmit={this.handleAddPun.bind(this)}>
        <TextArea
          placeholder="Enter your pun here"
          onChange={this.handleInputChange.bind(this)}
        />
      </Form>
    )
  }
}

export default PunEditForm
