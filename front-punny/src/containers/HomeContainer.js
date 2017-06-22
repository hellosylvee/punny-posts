import React, { Component } from 'react';

import Welcome from '../components/home/Welcome'
import TrendingGifs from '../components/home/TrendingGifs'
import TrendingPuns from '../components/home/TrendingPuns'

import { Grid } from 'semantic-ui-react'

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
      <Grid columns='equal'>
        <Welcome />
        <TrendingGifs />
        <TrendingPuns />
      </Grid>
    )
  }
}

export default HomeContainer
