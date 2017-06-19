import React, { Component } from 'react'
import { Grid, Form, Header, Button } from 'semantic-ui-react'

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
      <Grid.Row centered columns={3} className='animated fadeIn'>
        <Grid.Column>
          <Form className='animated fadeInDown mbl' onSubmit={this.handleAddPun.bind(this)}>
            <Form.Field>
              <label>Enter a pun</label>
              <input placeholder="Enter your pun here" onChange={this.handleInputChange.bind(this)}/>
            </Form.Field>
            <Button color='teal'>Submit Pun</Button>
          </Form>
        </Grid.Column>
        <Header as='h2' className='animated fadeIn'>All Your Glorious Puns</Header>
      </Grid.Row>
    )
  }
}

export default PunForm
