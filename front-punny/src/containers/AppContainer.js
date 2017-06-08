import React, { Component } from 'react';
import TodaysDate from '../components/TodaysDate'
// import TopicsList from '../components/home/TopicsList'
import GifList from '../components/GifList'
import PunsList from '../components/PunsList'
import Form from '../components/Form'
import axios from 'axios'
// import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css"

class AppContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifs: [],
      puns: []
    }
  }

  componentDidMount(){
    let URL = 'http://api.giphy.com/v1/stickers/search?q=hello&api_key=dc6zaTOxFJmzC&limit=1'
    axios.get(URL)
      .then( res => this.setState({ gifs: res.data.data }))

    let punListURL = 'http://localhost:3000/api/v1/puns'
    axios.get(punListURL)
      .then( res => this.setState({ puns: res.data }))
  }

  handleSubmit(punInput){
    let URL = 'http://localhost:3000/api/v1/puns'
    axios.post(URL, { pun: { pun: punInput } })
      .then( res => this.setState( prevState => ({ puns: [...prevState.puns, res.data.pun]}) ) )
  }

  getTodaysDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd < 10) { dd = '0' + dd }
    if(mm < 10) { mm = '0' + mm }

    return mm+'/'+dd+'/'+yyyy;
  }

  render(){
    return(
      <div>
        <TodaysDate today={this.getTodaysDate()}/>
        <GifList gifs={this.state.gifs} />
        <PunsList puns={this.state.puns}/>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}


// AppContainer.defaultProps = {
//   topics: ['salt bae', 'dab', 'happy', 'awkward', 'facepalm', 'corgi', 'cats', 'dennys', 'cake', 'slip']
// }

export default AppContainer
