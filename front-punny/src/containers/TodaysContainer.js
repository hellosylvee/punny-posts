import React, { Component } from 'react';
import TodaysDate from '../components/today/TodaysDate'
import TodaysList from '../components/today/TodaysList'
import PunsList from '../components/PunsList'
import Pun from '../components/Pun'
import Form from '../components/Form'

import axios from 'axios'

class TodayContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      gifs: [],
      puns: []
    }
  }

  componentDidMount(){
    let URL = 'http://api.giphy.com/v1/gifs/search?q=hello&api_key=dc6zaTOxFJmzC&limit=1'
    axios.get(URL)
      .then( res => this.setState({ gifs: res.data.data }))

    let punListURL = 'http://localhost:3000/api/v1/puns'
    axios.get(punListURL)
      .then( res => this.setState({ puns: res.data }))
  }

  handleSubmit(punInput){
    let PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.post(PUN_URL, {
      gif: { url: this.state.random_gif.image_url },
      pun: { pun: punInput }
    })
      .then( res => this.setState( prevState => ({ puns: [...prevState.puns, res.data.pun]}) ) )
    // this.props.history.push('/puns/:id')
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
    console.log('CONTAINER', this.state.gifs) //PASSING A FUCKING ARRAY OF OBJECTS
    return(
      <div>
        <TodaysDate today={this.getTodaysDate()}/>
        <TodaysList gifs={this.state.gifs} />
        <PunsList puns={this.state.puns}/>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}


export default TodayContainer
