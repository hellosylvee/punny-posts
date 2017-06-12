import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import UserPunStats from '../components/profile/UserPunStats'

class ProfileContainer extends Component {
  constructor(){
    super()
    this.setState = {

    }
  }

  render(){
    return(
      <div>
        <ul>
          <li><Link to='/profile/puns' component={UserPunStats}>Best Puns</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul>
      </div>
    )
  }
}

export default ProfileContainer
