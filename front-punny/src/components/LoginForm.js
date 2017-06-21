import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import { Grid, Segment, Form, Header, Button, Icon, Image } from 'semantic-ui-react'

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

    let signupbtn = (
      <Switch>
        <Route path='/signup' />
        <Route path='/login' render={() => (
          <Link to='/signup'>
            <Button basic color='teal'>
              Sign up!
            </Button>
          </Link>
        )} />
      </Switch>
    )

    return(
      <Grid>
        <Grid.Row centered columns={3} className='animated fadeInDown'>
          <Image src='./assets/images/beach-ball.png' size='mini' className='animated infinite bounce ball-center'/>
          <Header as='h1' className='page-header'>Punny Posts</Header>
          <Grid.Column>
            <Segment className='body-content'>
              <Header as='h3'>Welcome back! Log in to share your puns.</Header>
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
                <Button className='float-right' color='teal' animated='vertical'>
                  <Button.Content hidden>
                    <Icon name='birthday' /> Yay!
                  </Button.Content>
                  <Button.Content visible>
                    Log in now!
                  </Button.Content>
                </Button>
                <div>
                  <span className='prs'>New around here? </span>
                  {signupbtn}
                </div>
              </Form><br/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default LoginForm
