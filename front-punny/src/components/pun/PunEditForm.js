import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
    this.props.onUpdate(this.state.input, this.props.id)
    // this.setState({ input: '' })
    this.props.history.push('/puns')
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
          <div className='mtm'>
            {/* <Button default> Delete Pun </Button> */}
            <Button primary>  Save Pun <Icon name='right chevron' /></Button>
          </div>
        </Form>
    </div>
    )
  }
}

export default withRouter(PunEditForm)
