import React, { Component } from 'react'
import { Form, Header, Button, Grid } from 'semantic-ui-react'

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
      <Grid.Row centered columns={3} className='animated fadeIn'>
        <Header as='h1' className='animated fadeIn page-header'>Punny Post</Header>
        <Grid.Column>
          <Form className='animated fadeInDown search' onSubmit={this.handleSearchGif.bind(this)}>
            <Form.Field type="text" onChange={this.handleChange.bind(this)}>
              <input placeholder='Search for a gif'/>
            </Form.Field>
            <Button color='teal' type='submit'>Search Gif</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>

    )
  }
}

export default SearchGifForm
