import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import CentralPunsPage from '../components/CentralPunsPage'
import SearchGifForm from '../components/SearchGifForm'
import SearchGifDisplay from '../components/SearchGifDisplay'

import { Grid } from 'semantic-ui-react'

import axios from 'axios'

class PunContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      current_user: 0,
      random_gif: {}, //1 object
      puns: [] //array of objects
    }
  }

  componentDidMount(){
    if(!localStorage.jwt){
      return this.props.history.push('/login')
    } else {
      axios.get('http://localhost:3000/api/v1/puns')
      .then( res => this.setState({ puns: res.data }))
    }
  }

  handleSearchGif(query){
    console.log('*********************');
    console.log('handleSearchGif', this, query)
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query}`)
      .then( res => this.setState({ random_gif: res.data.data }))
  }

  handleAddPun(punInput){
    console.log('WHAT IS THIS? ', punInput)
    axios.post('http://localhost:3000/api/v1/puns', {
      gif: {
        url: this.state.random_gif.image_url,
        img_url: this.state.random_gif.fixed_height_downsampled_url
      },
      pun: {
        pun: punInput },
      user: { first_name: 'sylvee'}
    })
      .then( res => { console.log('container: ', res.data )
        this.setState( prevState => ({ puns: [...prevState.puns, res.data] }) )
        this.props.history.push('/home')
        this.props.history.push('/puns')
      })

  }

  handleUpdatePun(punUpdate, id){
    axios.patch(`http://localhost:3000/api/v1/puns/${id}`, {
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
      this.props.history.push('/home')
      this.props.history.push('/puns')
    })
    console.log('back to container: ', punUpdate)
  }

  handleDeletePun(id){
    axios.delete(`http://localhost:3000/api/v1/puns/${id}`)
    .then( res => {
      const updatedPuns = this.state.puns.filter(pun => pun.id !== id)
      this.setState({ puns: updatedPuns})
      alert("Pun has been deleted!")
      this.props.history.push('/puns')
    })
  }

  handleAddLike(props){
    axios.post(`http://localhost:3000/api/v1/likes`, {
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
      this.props.history.push('/puns')
    })
  }

  render(){
    console.log('container: ', this.state)
    return(
      <div>
        <Grid>
          <SearchGifForm
            query={this.state.query}
            onSubmit={this.handleSearchGif.bind(this)}/>
          <SearchGifDisplay
            random_gif={this.state.random_gif}/>
        </Grid>
        <CentralPunsPage
          onSubmit={this.handleAddPun.bind(this)}
          onUpdate={this.handleUpdatePun.bind(this)}
          onDelete={this.handleDeletePun.bind(this)}
          addLike={this.handleAddLike.bind(this)}
          puns={this.state.puns}
          current_user={this.state.current_user}/>
    </div>
    )
  }
}


export default withRouter(PunContainer)
