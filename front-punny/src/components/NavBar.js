import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Goodbye from './Goodbye'
import { Menu, Image } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let show_login = (
      <Menu.Item as={Link} to='/login'
        name='login'
        active={activeItem === 'login'}
        onClick={this.handleItemClick}
        > Log In
      </Menu.Item>
    )

    let show_logout = (
      <Menu.Item as={Link} to='/login'
        name='logout'
        active={activeItem === 'logout'}
        onClick={
          () => localStorage.clear()
        }
        > Log Out
      </Menu.Item>
    )

    let check_token = (localStorage.jwt) ? show_logout : show_login

    const { activeItem } = this.state

    return (
      <Menu stackable
        color='teal'
        inverted widths={6}
        className='animated fadeInDown'>

        <Menu.Item as={Link} to='/home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
        <Image size='mini' src='/assets/images/beach-ball.png' /> Punny Posts
        </Menu.Item>

        <Menu.Item as={Link} to='/home'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        > Home
        </Menu.Item>

        <Menu.Item as={Link} to='/puns'
          name='puns'
          active={activeItem === 'pun'}
          onClick={this.handleItemClick}
        > Puns
        </Menu.Item>

        <Menu.Item as={Link} to='/today'
          name='today'
          active={activeItem === 'today'}
          onClick={this.handleItemClick}
        > Today
        </Menu.Item>

        <Menu.Item as={Link} to='/profile'
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        > Profile
        </Menu.Item>

        {check_token}
      </Menu>
    )
  }
}
