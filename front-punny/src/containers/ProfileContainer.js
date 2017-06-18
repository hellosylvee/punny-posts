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
      axios.get('http://localhost:3000/api/v1/users')
      .then( res => console.log('what is this', res.data))
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
