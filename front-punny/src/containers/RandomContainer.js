import React, { Component } from 'react';
import SearchForm from '../components/SearchForm'
import RandomGif from '../components/RandomGif'
import axios from 'axios'

class RandomContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      random_gif: {}
    }
  }

  componentDidMount(){
    // let defaultURL = 'http://api.giphy.com/v1/gifs/search?q=hello&api_key=dc6zaTOxFJmzC&limit=10'
    // axios.get(defaultURL)
    //   .then( res => this.setState({ gifs: res.data.data }))
    //
    // let punListURL = 'http://localhost:3000/api/v1/puns'
    // axios.get(punListURL)
    //   .then( res => this.setState({ puns: res.data }))
  }
  
  handleQuerySubmit(query){
    let URL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query}`

    axios.get(URL)
      .then( res => this.setState({ random_gif: res.data.data }))
      this.props.history.push('/random')
  }

  render(){
    return(
      <div>
        <SearchForm query={this.state.query} onSubmit={this.handleQuerySubmit.bind(this)}/>
        <RandomGif random_gif={this.state.random_gif}/>
        {/* <TodaysDate today={this.getTodaysDate()}/> */}
        {/* <GifList gifs={this.state.gifs} /> */}
        {/* <PunsList puns={this.state.puns}/> */}
        {/* <Form onSubmit={this.handleSubmit.bind(this)}/> */}
      </div>
    )
  }
}


export default RandomContainer
