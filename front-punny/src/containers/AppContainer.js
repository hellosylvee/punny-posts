import React, { Component } from 'react';
import GifList from '../components/GifList'
import PunsList from '../components/PunsList'
import Form from '../components/Form'
import axios from 'axios'

class AppContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount(){
    let URL = 'http://api.giphy.com/v1/stickers/search?q=cat&api_key=dc6zaTOxFJmzC&limit=3'
    axios.get(URL)
      .then( res => this.setState({ gifs: res.data.data }) //passing an array
      // later make a randomize function if given array
    )
  }

  handleSubmit(){
    let URL = 'http://localhost:3000/api/v1/puns'
    axios.patch(URL)
      .then( res => this.setState({ puns: res.data }))
  }

  render(){
    // console.log('container', this.state)
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <PunsList puns={this.state.puns}/>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}

export default AppContainer
