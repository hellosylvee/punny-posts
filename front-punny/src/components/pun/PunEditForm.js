import React, { Component } from 'react'
import { Form, TextArea, Button, Icon } from 'semantic-ui-react'

class PunEditForm extends Component {
  constructor(props){
    console.log('puneditform: ', props)
    super(props)
    this.state = {
      input: this.props.pun
    }
  }

  handleInputChange(e){
    this.setState({ input: e.target.value })
  }

  handleUpdatePun(e){
    e.preventDefault()
    // debugger
    this.props.onUpdate(this.state.input, this.props.id)
    this.setState({ input: '' })
  }

  handleDeletePun(){
    console.log('clicked!: ', this.props)
    this.props.onDelete(this.props.id)

  }

  render(){
    console.log('puneditform', this.state)
    return(
      <div>
        <Form onSubmit={this.handleUpdatePun.bind(this)}>
          <TextArea
            value={this.state.input}
            onChange={this.handleInputChange.bind(this)}
          />
          <Button primary>
            Save Pun <Icon name='right chevron' />
          </Button>
        </Form>
    </div>
    )
  }
}

export default PunEditForm
