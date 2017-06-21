import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

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
      date: date
    }
  }

  componentDidMount(){
    if(!localStorage.jwt){
      return this.props.history.push('/login')
    } else {
      axios.get('http://api.giphy.com/v1/gifs/trending?&api_key=dc6zaTOxFJmzC&limit=1')
      .then( res => this.setState({ gif: res.data.data[0] })) //1 obj

      let punListURL = 'http://localhost:3000/api/v1/puns'
      axios.get(punListURL + `?date=${this.state.date}`)
      .then( res => this.setState({
        puns: res.data  //array of objects
      }))
    }
  }

  handleAddTodaysPun(punInput){
    axios.post('http://localhost:3000/api/v1/puns', {
      gif: {
        url: this.state.gif.images.fixed_height.url,
        img_url: this.state.gif.images.fixed_height_downsampled.url
       },
      pun: { pun: punInput },
      user: { first_name: 'sylvee'}
    })
      .then( res => {
        this.setState( prevState => ({ puns: [...prevState.puns, res.data] }) )
      })
  }

  getTodaysDate(){
    var date = new Date().toJSON().slice(0,10).replace(/-/g,'/')

    axios.get(`http://localhost:3000/api/v1/puns/?date=${date}`)
    .then( res => this.setState({
      puns: res.data,
      date: date
    }))
  }

  getPrevDate(){
    var curr = this.state.date
        curr = curr.split('/')
    var [yyyy, mm, dd] = curr
    let prevDay = yyyy + '/' + mm + '/' + (dd - 1)

    axios.get(`http://localhost:3000/api/v1/puns/?date=${prevDay}`)
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

    axios.get(`http://localhost:3000/api/v1/puns/?date=${nextDay}`)
    .then( res => this.setState({
      puns: res.data,
      date: nextDay
    }))
  }

  handleAddLike(props){
    axios.post('http://localhost:3000/api/v1/likes', {
      pun: { id: props.id },
      user: { id: props.user.id }
    })
    .then( res => {
      const updatedLikes = this.state.puns.map(p => {
        if(p.id === res.data.pun.id){
          p.likes = res.data.pun.likes
        return p
        } else {
          return p
        }
      })
      this.setState({ puns: updatedLikes })
    })
  }

  render(){
    console.log('todays CONTAINER: ', this.state)
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
        <Grid.Row centered columns={2} className='animated fadeIn'>
          <TodaysPage
            gif={this.state.gif}
            puns={this.state.puns}
            onSubmit={this.handleAddTodaysPun.bind(this)}
            addLike={this.handleAddLike.bind(this)}
          />
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(TodayContainer)
