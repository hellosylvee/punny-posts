import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import Welcome from '../components/home/Welcome'
import Topics from '../components/home/Topics'

import { Grid, Header, Image } from 'semantic-ui-react'

import axios from 'axios'

class HomeContainer extends Component {
  constructor(){
    super()
    this.state ={

    }
  }

  componentDidMount(){
    if(!localStorage.jwt){
      return this.props.history.push('/login')
    } else {
      axios.get('http://api.giphy.com/v1/gifs/trending?&api_key=dc6zaTOxFJmzC&limit=1')
    }
  }

  render(){
    return(
      <Grid>
        <Grid.Row centered columns={2} className='animated fadeInDown'>
          <Welcome />
        </Grid.Row>
        <Grid.Row centered columns={2} className='animated fadeInDown'>
          <Topics />
        </Grid.Row>
      </Grid>
    )
  }
}

export default HomeContainer
