import React, { Component } from 'react';
import TodaysDate from '../components/today/TodaysDate'
import TodaysPage from '../components/today/TodaysPage'

import axios from 'axios'

class TodayContainer extends Component {
  constructor(){
    super()
    this.state = {
      gif: {},
      puns: []
    }
  }

  componentDidMount(){
    let URL = 'http://api.giphy.com/v1/gifs/trending?&api_key=dc6zaTOxFJmzC&limit=1'
    axios.get(URL)
      .then( res => this.setState({ gif: res.data.data[0] })) //1 obj

    let punListURL = 'http://localhost:3000/api/v1/puns'
    axios.get(punListURL)
    .then( res => this.setState({ puns: res.data })) //array of objects
  }

  handleAddTodaysPun(punInput){
    const PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.post(PUN_URL, {
      gif: { url: this.state.gif.images.fixed_height.url },
      pun: { pun: punInput },
      user: { first_name: 'sylvee'}
    })
      .then( res => {
        this.setState( prevState => ({ puns: [...prevState.puns, res.data] }) )
      })
        // .then( id => this.props.history.push(`/today/puns/${id}`)) //just changing url
  }

  handleUpdateTodaysPun(punInput){
    let PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.patch(PUN_URL, {
      pun: { pun: punInput }
    })
    .then( res => this.setState({ pun: res.data.pun }))
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
        <TodaysDate today={this.getTodaysDate()} />
        <TodaysPage
          gif={this.state.gif}
          puns={this.state.puns}
          onSubmit={this.handleAddTodaysPun.bind(this)}
          onUpdate={this.handleUpdateTodaysPun.bind(this)} />
      </div>
    )
  }
}


export default TodayContainer
