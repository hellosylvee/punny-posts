import React, { Component } from 'react'

import UserPunStats from '../components/profile/UserPunStats'
import axios from 'axios'

class ProfileContainer extends Component {
  constructor(){
    super()
    this.setState = {

    }
  }

  componentDidMount(){
    if(!localStorage.jwt){
      return this.props.history.push('/login')
    } else {
      console.log('send a GET request!')
    }
  }

  render(){
    return(
      <div>
        <UserPunStats />
      </div>
    )
  }
}

export default ProfileContainer
