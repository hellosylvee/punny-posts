import React, { Component } from 'react';
import TodaysDate from '../components/TodaysDate'
import GifOfTheDay from '../components/GifOfTheDay'
import axios from 'axios'

class AppContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount(){
    let URL = 'http://api.giphy.com/v1/stickers/search?q=cat&api_key=dc6zaTOxFJmzC&limit=2'
    axios.get(URL)
      .then( res => this.setState({ gifs: res.data.data }) //passing an array
      // .then( res => console.log(res.data)
    )
  }

  render(){
    // console.log('container', this.state)
    return(
      <div className="pun">
        <TodaysDate />
        <GifOfTheDay gifs={this.state.gifs} />
      </div>
    )
  }
}

export default AppContainer
