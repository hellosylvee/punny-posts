import React, { Component } from 'react';
import TodaysDate from '../components/TodaysDate'
import GifList from '../components/GifList'
import PunsList from '../components/PunsList'
import Form from '../components/Form'
import axios from 'axios'
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css"

class AppContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifs: [],
      puns: [],
      selectedDay: undefined
    }
  }

  componentDidMount(){
    let URL = 'http://api.giphy.com/v1/stickers/search?q=hello&api_key=dc6zaTOxFJmzC&limit=1'
    axios.get(URL)
      .then( res => this.setState({ gifs: res.data.data })
    )
  }

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  handleSubmit(punInput){
    // console.log('handlesubmit:', punInput)
    axios.post('http://localhost:3000/api/v1/puns', { pun: { pun: punInput } })
      .then( res => this.setState( prevState => ({ puns: [...prevState.puns, punInput]}) ) )
  }

  render(){
    // console.log('what is this???', this.state)
    return(
      <div>
        <DayPicker
          disabledDays={{ daysOfWeek: [0] }}
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
        <GifList gifs={this.state.gifs} />
        <PunsList puns={this.state.puns}/>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}

export default AppContainer
