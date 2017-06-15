import React, { Component } from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'

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
    // let error = this.state == '' ? render={() => <Message
    //   error
    //   header='Action Forbidden'
    //   content='Oh, wait! You forgot to write your pun!' /> } : null
    return(
      <Segment>
        <Header as='h3'>Enter Your Pun</Header>
        <Form
          size='big' error
          onSubmit={this.handleAddPun.bind(this)}>
          <Form.Input
            placeholder='Give it your best pun!'
            value={this.state.input}
            onChange={this.handleInputChange.bind(this)} />
          {/* {error} */}
          <Button color='teal'>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default TodaysPunForm


// return(
//   <form className='form' onSubmit={this.handleAddPun.bind(this)}>
//     <textarea
//       placeholder="Enter your pun here"
//       value={this.state.input}
//       onChange={this.handleInputChange.bind(this)}>
//     </textarea>
//     <button>Submit Pun</button>
//   </form>
// )
