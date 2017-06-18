import React, { Component } from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'

class PunForm extends Component {
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
      <Grid.Column>
        <Form className='form' onSubmit={this.handleAddPun.bind(this)}>
          <Form.Field>
            <label>Enter a pun</label>
            <input placeholder="Enter your pun here" onChange={this.handleInputChange.bind(this)}/>
          </Form.Field>
          <Button color='teal'>Submit Pun</Button>
        </Form>
      </Grid.Column>
    )
  }
}

export default PunForm
