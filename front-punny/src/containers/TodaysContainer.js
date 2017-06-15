import React, { Component } from 'react';
import TodaysDate from '../components/today/TodaysDate'
import TodaysPage from '../components/today/TodaysPage'

import { Grid } from 'semantic-ui-react'
import axios from 'axios'

class TodayContainer extends Component {
  constructor(){
    super()

    var date = new Date().toJSON().slice(0,10).replace(/-/g,'/')

    this.state = {
      gif: {},
      puns: [],
      date: date,
      likes: 0
    }
  }

  componentDidMount(){
    let URL = 'http://api.giphy.com/v1/gifs/trending?&api_key=dc6zaTOxFJmzC&limit=1'
    axios.get(URL)
      .then( res => this.setState({ gif: res.data.data[0] })) //1 obj

    let punListURL = 'http://localhost:3000/api/v1/puns'
    axios.get(punListURL + `?date=${this.state.date}`)
    .then( res => this.setState({
      puns: res.data,  //array of objects
      likes: 10
    }))
    // .then(res => console.log('compondidmount: ', res.data)) //array of obj, containing gif obj, user obj, and id
  }

  handleAddTodaysPun(punInput){
    let PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.post(PUN_URL, {
      gif: { url: this.state.gif.images.fixed_height.url },
      pun: { pun: punInput },
      user: { first_name: 'Mario'}
    })
      .then( res => {
        this.setState( prevState => ({ puns: [...prevState.puns, res.data] }) )
      })
  }

  getTodaysDate(){
    var date = new Date().toJSON().slice(0,10).replace(/-/g,'/')

    let PUN_URL = 'http://localhost:3000/api/v1/puns/'
    axios.get(PUN_URL + `?date=${date}`)
    .then( res => this.setState({
      puns: res.data,
      date: date
    }))
    console.log('today button success!')
  }

  getPrevDate(){
    var curr = this.state.date
        curr = curr.split('/')
    var [yyyy, mm, dd] = curr
    let prevDay = yyyy + '/' + mm + '/' + (dd - 1)

    let PUN_URL = 'http://localhost:3000/api/v1/puns/'
    axios.get(PUN_URL + `?date=${prevDay}`)
    .then( res => this.setState({
      puns: res.data,
      date: prevDay
    }))
  }

  getNextDate(){
    var curr = this.state.date
        curr = curr.split('/')
    var [yyyy, mm, dd] = curr
    var nd = parseInt(dd, 0) + 1
    var nn = nd.toString()
    let nextDay = yyyy + '/' + mm + '/' + nn

    let PUN_URL = 'http://localhost:3000/api/v1/puns/'
    axios.get(PUN_URL + `?date=${nextDay}`)
    .then( res => this.setState({
      puns: res.data,
      date: nextDay
    }))
  }

  render(){
    console.log('container: ', this.state)
    return(
      <Grid>
        <Grid.Row centered columns={2}>
          <TodaysDate
            date={this.state.date}
            onToday={this.getTodaysDate.bind(this)}
            onPrevDay={this.getPrevDate.bind(this)}
            onNextDay={this.getNextDate.bind(this)}
          />
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <TodaysPage
            gif={this.state.gif}
            puns={this.state.puns}
            likes={this.state.likes} //just a #
            onSubmit={this.handleAddTodaysPun.bind(this)}
          />
        </Grid.Row>
      </Grid>
    )
  }
}

export default TodayContainer

// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth()+1;
// let yyyy = today.getFullYear();
//
// if(dd < 10) { dd = '0' + dd }
// if(mm < 10) { mm = '0' + mm }
//
// return mm+'/'+dd+'/'+yyyy;

// var UTC = new Date().toJSON().slice(0,10).replace(/-/g,'/');
// return UTC
