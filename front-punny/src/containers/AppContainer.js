import React, { Component } from 'react';
import TodaysDate from '../components/TodaysDate'
import TopicsList from '../components/home/TopicsList'
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

    // let topicURL =`http://api.giphy.com/v1/stickers/search?q=${topic}&api_key=dc6zaTOxFJmzC&limit=1`
    // axios.get(topicURL)
    //   .then( res => this.setState({ gifs: res.data.data })
    // )

    //get me all the puns for this particular day
    let punURL = 'http://localhost:3000/api/v1/puns'
    axios.get(punURL)
      // .then( res => this.setState(  ))
      .then( res => console.log("include this: ", res.data))
  }

  // React Day Picker module
  // handleDayClick = (day, { selected }) => {
  //   this.setState({
  //     selectedDay: selected ? undefined : day,
  //   });
  // };

  handleSubmit(punInput){
    // console.log('handlesubmit:', punInput)
    let URL = 'http://localhost:3000/api/v1/puns'
    axios.post(URL, { pun: { pun: punInput } })
      .then( res => this.setState( prevState => ({ puns: [...prevState.puns, punInput]}) ) )
  }

  handleShowPrevDay(){
    let URL = 'http://localhost:3000/api/v1/puns'
    axios.get(URL)
    .then( res => res)
  }

  handleShowNextDay(){
    
  }
  // displayTopics(userClicked){
  //   const TOPICS = ['salt bae', 'dab', 'happy', 'awkward', 'facepalm', 'corgi', 'cats', 'dennys', 'cake', 'slip'];
  //
  //   if (TOPICS.includes(userClicked)) {
  //     let URL = `http://api.giphy.com/v1/stickers/search?q=${userClicked}&api_key=dc6zaTOxFJmzC&limit=5`
  //     axios.get(URL)
  //       .then( res => this.setState({ res.data.data }) )
  //   }
  // }


  render(){
    // console.log('what is this???', this.state)
    return(
      <div>
        {/* <DayPicker
          disabledDays={{ daysOfWeek: [0] }}
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        /> */}
        <TodaysDate />
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
