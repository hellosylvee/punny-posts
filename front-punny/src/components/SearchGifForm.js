import React, { Component } from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'

class SearchGifForm extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }

  handleChange(e){
    this.setState({ input: e.target.value })
  }

  handleSearchGif(e){
    e.preventDefault()
    this.props.onSubmit(this.state.input)
    this.setState({ input: '' })
  }

  render(){
    return(
      <Grid.Column>
        <Form className='search' onSubmit={this.handleSearchGif.bind(this)}>
          <Form.Field type="text" onChange={this.handleChange.bind(this)}>
            <input placeholder='Search for a gif'/>
          </Form.Field>
          <Button color='teal' type='submit'>Search Gif</Button>
        </Form>
      </Grid.Column>
    )
  }
}

export default SearchGifForm
