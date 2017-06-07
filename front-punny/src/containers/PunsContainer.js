import React, { Component } from 'react';
import PunsList from '../components/PunsList'
import Form from '../components/Form'
import axios from 'axios'

class PunsContainer extends Component {
  constructor(){
    super()
    this.state={
      puns: []
    }
  }

  handleSubmit(){
    let URL = 'http://localhost:3000/api/v1/puns'
    axios.patch(URL)
      .then( res => this.setState({ puns: res.data }))
  }

  render(){
    return(
      <div/>
    )
  }
}

export default PunsContainer
