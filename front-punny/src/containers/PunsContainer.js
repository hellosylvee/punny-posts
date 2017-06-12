import React, { Component } from 'react';
// import DisplaySearchedSearchGifWithPun from '../components/DisplaySearchedSearchGifWithPun'
import SearchGifForm from '../components/SearchGifForm'
import SearchGifDisplay from '../components/SearchGifDisplay'
// import TopicsList from '../components/home/TopicsList'
// import GifList from '../components/GifList'
import PunsList from '../components/PunsList'
import PunForm from '../components/PunForm'
import axios from 'axios'

class PunContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      random_gif: {}, //1 object
      puns: [] //array
    }
  }

  handleQuerySubmit(query){
    let URL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query}`
    axios.get(URL)
      .then( res => this.setState({ random_gif: res.data.data }))
  }

  handleSubmit(punInput){
    let PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.post(PUN_URL, {
      gif: { url: this.state.random_gif.image_url },
      pun: { pun: punInput },
      user: { first_name: 'sylvee'}
    })
      .then( res => this.setState(
        prevState => ({ puns: [...prevState.puns, res.data.pun]}) ) )
    // this.props.history.push('/puns/:id')
  }

  render(){
    console.log('url: ', this.state.random_gif.image_url)
    return(
      <div>
        <SearchGifForm query={this.state.query} onSubmit={this.handleQuerySubmit.bind(this)}/>
        <SearchGifDisplay random_gif={this.state.random_gif}/>
        {/* <TodaysDate today={this.getTodaysDate()}/> */}
        {/* <GifList gifs={this.state.gifs} /> */}
        <PunForm onSubmit={this.handleSubmit.bind(this)}/>
        <PunsList puns={this.state.puns}/>
      </div>
    )
  }
}


export default PunContainer
