import React, { Component } from 'react';
// import DisplaySearchedRandomGifWithPun from '../components/DisplaySearchedRandomGifWithPun'
import SearchForm from '../components/SearchForm'
import RandomGif from '../components/RandomGif'
// import TopicsList from '../components/home/TopicsList'
// import GifList from '../components/GifList'
import PunsList from '../components/PunsList'
import Form from '../components/Form'
import axios from 'axios'

class PunContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      random_gif: {},
      gif_id: '',
      puns: []
    }
  }

  handleQuerySubmit(query){
    let URL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query}`
    console.log(URL)
    axios.get(URL)
      .then( res => this.setState({ random_gif: res.data.data })) //1 object with url property
      // this.props.history.push('/random')
  }

  handleSubmit(punInput){
    let GIF_URL = 'http://localhost:3000/api/v1/gifs'
    axios.post(GIF_URL, {
      gif: { url: this.state.random_gif.image_url }
    })
      .then( res => this.setState({ gif_id: res.data.id}))
    // .then( res => console.log('hello'))

    let PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.post(PUN_URL, {
      pun: {
        pun: punInput,
        gif_id: this.state.gif_id,
        user_id: 1
      }
    })
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
        <Form onSubmit={this.handleSubmit.bind(this)}/>
        <PunsList puns={this.state.puns}/>
      </div>
    )
  }
}


export default PunContainer
