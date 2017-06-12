import React, { Component } from 'react';
import TodaysDate from '../components/today/TodaysDate'
import TodaysPage from '../components/today/TodaysPage'

import axios from 'axios'

class TodayContainer extends Component {
  constructor(){
    super()
    this.state = {
      gif: [],
      puns: []
    }
  }

  componentDidMount(){
    // let URL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=random'
    let URL = 'http://api.giphy.com/v1/gifs/search?q=random&api_key=dc6zaTOxFJmzC&limit=1'
    axios.get(URL)
      .then( res => this.setState({ gif: res.data.data }))

    let punListURL = 'http://localhost:3000/api/v1/puns'
    axios.get(punListURL)
    .then( res => this.setState({ puns: res.data }))
    // .then( res => console.log(res.data)) //array of objects
  }

  handleAddTodaysPun(punInput){
    let PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.post(PUN_URL, {
      gif: { url: this.state.random_gif.image_url },
      pun: { pun: punInput }
    })
      .then( res => this.setState( prevState => ({ puns: [...prevState.puns, res.data.pun]}) ) )
    // this.props.history.push('/puns/:id')
  }

  handleUpdateTodaysPun(punInput){
    let PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.patch(PUN_URL, {
      pun: { pun: punInput}
    })
    .then( res => console.log('UPDATE SUCCESS!'))
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
    console.log('CONTAINER', this.state.gifs)
    return(
      <div>
        <TodaysDate today={this.getTodaysDate()}/>
        <TodaysPage
          // today={this.getTodaysDate()}
          gif={this.state.gif}
          puns={this.state.puns}
          onSubmit={this.handleAddTodaysPun.bind(this)}
          onUpdate={this.handleUpdateTodaysPun.bind(this)}
        />
      </div>
    )
  }
}


export default TodayContainer
