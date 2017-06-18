import React, { Component } from 'react'
import { Grid, Segment, Form, Header, Button, Icon } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(inputType, e){
    var change = {};
    change[inputType] = e.target.value;
    this.setState(change)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('hey! you are sending this to app.js')
    this.props.handleLogin(this.state)
  }

  render(){
    console.log('sign in', this.state)
    return(
      <Grid>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Segment>
              <Form onSubmit={this.handleSubmit.bind(this)}><br/>
                <Form.Field>
                  <Header as='h3'>Username</Header>
                  <input type='text'
                    placeholder='Enter username'
                    value={this.state.username}
                    onChange={this.handleChange.bind(this, 'username')}/>
                </Form.Field><br/>
                <Form.Field>
                  <Header as='h3'>Password</Header>
                  <input type='password'
                    placeholder='Enter password'
                    value={this.state.password}
                    onChange={this.handleChange.bind(this, 'password')}/>
                </Form.Field><br/>
                <Button color='teal' type='submit'>
                  Log In <Icon name='right chevron' />
                </Button>
              </Form><br/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default LoginForm
