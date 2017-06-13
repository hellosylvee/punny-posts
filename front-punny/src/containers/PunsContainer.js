import React, { Component } from 'react';

import CentralPunsPage from '../components/CentralPunsPage'
import SearchGifForm from '../components/SearchGifForm'
import SearchGifDisplay from '../components/SearchGifDisplay'

import axios from 'axios'

class PunContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      random_gif: {}, //1 object
      puns: [] //array of objects
    }
  }

  componentWillMount(){
    let PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.get(PUN_URL)
      .then( res => this.setState({ puns: res.data }))
  }

  handleSearchGif(query){
    // console.log('what is this query', query)
    let URL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query}`
    axios.get(URL)
      .then( res => this.setState({ random_gif: res.data.data }))
  }

  handleAddPun(punInput){
    let PUN_URL = 'http://localhost:3000/api/v1/puns'
    axios.post(PUN_URL, {
      gif: { url: this.state.random_gif.image_url },
      pun: { pun: punInput },
      user: { first_name: 'sylvee'}
    })
      .then( res => { console.log('container: ', res.data )
        this.setState( prevState => ({ puns: [...prevState.puns, res.data] }) )

        // this.props.history.push(`/puns/${res.data.id}`)
      })
      // this.props.history.push('/puns/:id')

  }

  render(){
    console.log('container: ', this.state)
    return(
      <div>
        <SearchGifForm
          query={this.state.query}
          onSubmit={this.handleSearchGif.bind(this)}/>
        <SearchGifDisplay random_gif={this.state.random_gif}/>

        <CentralPunsPage
          onSubmit={this.handleAddPun.bind(this)}
          puns={this.state.puns}
        />
        {/* <PunForm onSubmit={this.handleAddPun.bind(this)}/> */}
        {/* <PunsList puns={this.state.puns}/> */}
      </div>
    )
  }
}


export default PunContainer
