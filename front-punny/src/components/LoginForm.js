import React, { Component } from 'react'

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
      <form className='signin' onSubmit={this.handleSubmit.bind(this)}>
        <label>Username</label>
        <input type='text'
          placeholder='enter username'
          value={this.state.username}
          onChange={this.handleChange.bind(this, 'username')}
        />
        <label>Password</label>
        <input type='password'
          placeholder='enter password'
          value={this.state.password}
          onChange={this.handleChange.bind(this, 'password')}
        />
        <input type='submit' />
      </form>
    )
  }
}

export default LoginForm
