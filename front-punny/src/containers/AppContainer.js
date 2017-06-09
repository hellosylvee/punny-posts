import React, { Component } from 'react';
import SearchForm from '../components/SearchForm'
import RandomGif from '../components/RandomGif'
// import TodaysDate from '../components/TodaysDate'
// import TopicsList from '../components/home/TopicsList'
import GifList from '../components/GifList'
import PunsList from '../components/PunsList'
import Form from '../components/Form'
import axios from 'axios'

import "react-day-picker/lib/style.css"

class AppContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      random_gif: {},
      gifs: [],
      puns: []
    }
  }

  componentDidMount(){
    // let defaultURL = 'http://api.giphy.com/v1/gifs/search?q=hello&api_key=dc6zaTOxFJmzC&limit=10'
    // axios.get(defaultURL)
    //   .then( res => this.setState({ gifs: res.data.data }))

    // let punListURL = 'http://localhost:3000/api/v1/puns'
    // axios.get(punListURL)
    //   .then( res => this.setState({ puns: res.data }))
  }

  handleQuerySubmit(query){
    // let URL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&limit=1`
    let URL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query}`

    axios.get(URL)
      .then( res => this.setState({ random_gif: res.data.data }))
      // .then( res => console.log(res.data.data))

  }

  handleSubmit(punInput){
    let URL = 'http://localhost:3000/api/v1/puns'
    axios.post(URL, { pun: { pun: punInput } })
      .then( res => this.setState( prevState => ({ puns: [...prevState.puns, res.data.pun]}) ) )
  }

  // getTodaysDate() {
  //   let today = new Date();
  //   let dd = today.getDate();
  //   let mm = today.getMonth()+1;
  //   let yyyy = today.getFullYear();
  //
  //   if(dd < 10) { dd = '0' + dd }
  //   if(mm < 10) { mm = '0' + mm }
  //
  //   return mm+'/'+dd+'/'+yyyy;
  // }

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


export default AppContainer
