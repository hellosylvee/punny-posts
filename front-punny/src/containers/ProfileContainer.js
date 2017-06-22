import React, { Component } from 'react'

import UserPunStats from '../components/profile/UserPunStats'
import PunsTable from '../components/profile/PunsTable'

import { Icon, Image, Statistic, Grid, Header, Label } from 'semantic-ui-react'
import axios from 'axios'

class ProfileContainer extends Component {
  constructor(){
    super()
    this.state = {
      puns: []
    }
  }

  componentDidMount(){
    if(!localStorage.jwt){
      return this.props.history.push('/login')
    } else {
      axios.get('http://localhost:3000/api/v1/puns')
      .then( res => this.setState({ puns: res.data }) )
    }
  }

  render(){
    return(
      <div>
        <Grid centered>
          <Grid.Row className='mbl'>
            <Header as='h1'>Overall Stats<Label>Super stretch feature</Label></Header>
          </Grid.Row>
        </Grid>
        <div className='mbl'><UserPunStats /></div>
        <Grid centered>
          <Grid.Row className='mbl'>
            <Header as='h1'>Puns Stats</Header>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={4}>
              <PunsTable puns={this.state.puns}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <Label>chart here</Label>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ProfileContainer
