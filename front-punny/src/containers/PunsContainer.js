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
      })

  }

  handleUpdatePun(punUpdate, id){
    let PUN_URL = `http://localhost:3000/api/v1/puns/${id}` //${id}
    axios.patch(PUN_URL, {
      pun: { pun: punUpdate }
    })
    .then( res => {
      const updatedPuns = this.state.puns.map(p => {
        if(p.id === res.data.id){
          return res.data
        } else {
          return p
        }
      })
      this.setState({ puns: updatedPuns })
      this.props.history.push('/puns')
    })
    console.log('back to container: ', punUpdate)
  }

  handleDeletePun(id){
    let PUN_URL = `http://localhost:3000/api/v1/puns/${id}`
    axios.delete(PUN_URL)
    .then( res => {
      const updatedPuns = this.state.puns.filter(pun => pun.id !== id)
      this.setState({ puns: updatedPuns})
      alert("Pun has been deleted!")
      this.props.history.push('/puns')
    })
  }

  handleAddLike(props){
    let LIKE_URL = `http://localhost:3000/api/v1/likes`
    axios.post(LIKE_URL, {
      pun: { id: props.id },
      user: { id: props.user.id }
    })
    .then( res => {
      // console.log('what is the response?', res.data)
      // console.log('all puns before like: ', this.state.puns)
      const updatedLikes = this.state.puns.map(p => {
        if(p.id === res.data.pun.id){
          // console.log('pun likes before heart: ', p.likes)
          p.likes = res.data.pun.likes
          // console.log('pun likes after heart: ', p.likes)
        return p
        } else {
          return p
        }
      })
      this.setState({ puns: updatedLikes })
      // console.log('all puns after likes: ', this.state.puns)
      // console.log('update SUCCESS!!!!!!')
      // this.props.history.push('/puns')
    })
  }

  render(){
    console.log('container: ', this.state)
    // debugger
    return(
      <div>
        <SearchGifForm
          query={this.state.query}
          onSubmit={this.handleSearchGif.bind(this)}/>
        <SearchGifDisplay random_gif={this.state.random_gif}/>
        <CentralPunsPage
          onSubmit={this.handleAddPun.bind(this)}
          onUpdate={this.handleUpdatePun.bind(this)}
          onDelete={this.handleDeletePun.bind(this)}
          addLike={this.handleAddLike.bind(this)}
          puns={this.state.puns}
        />
      </div>
    )
  }
}


export default PunContainer
