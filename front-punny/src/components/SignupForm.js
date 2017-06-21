import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import { Grid, Segment, Form, Header, Button, Icon, Image } from 'semantic-ui-react'

class SignupForm extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: ''
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
    this.props.handleSignup(this.state)
  }

  render(){
    console.log('sign in', this.state)

    return(
      <Grid>
        <Grid.Row centered columns={2}>
          <Image src='./assets/images/beach-ball.png' size='mini' className='animated infinite bounce ball-center'/>
          <Header as='h1' className='page-header'>Punny Posts</Header>
          <Grid.Column>
            <Segment className='body-content animated fadeInDown'>
              <Header as='h3'>Sign up quick to get started!</Header>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group className='signup-form' widths='equal'>
                  <Form.Field>
                    <Header as='h5'>First Name</Header>
                    <input type='text'
                      placeholder='Enter first name'
                      value={this.state.first_name}
                      onChange={this.handleChange.bind(this, 'first_name')}/>
                  </Form.Field>
                  <Form.Field>
                    <Header as='h5'>Last Name</Header>
                    <input type='text'
                      placeholder='Enter last name'
                      value={this.state.last_name}
                      onChange={this.handleChange.bind(this, 'last_name')}/>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <Header as='h5'>Username</Header>
                    <input type='text'
                      placeholder='Enter username'
                      value={this.state.username}
                      onChange={this.handleChange.bind(this, 'username')}/>
                  </Form.Field>
                  <Form.Field>
                    <Header as='h5'>Password</Header>
                    <input type='password'
                      placeholder='Enter password'
                      value={this.state.password}
                      onChange={this.handleChange.bind(this, 'password')}/>
                  </Form.Field>
                </Form.Group><br/>

                <Switch>
                  <Route path='/login' />
                  <Route path='/signup' render={() => <Link to='/login'>I have an account!</Link>} />
                </Switch>

                <Button className='float-right' color='teal' animated='vertical'>
                  <Button.Content hidden>
                     <Icon name='heart' /> Huzzah!
                  </Button.Content>
                  <Button.Content visible>
                    Sign up for puns!
                  </Button.Content>
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default SignupForm
