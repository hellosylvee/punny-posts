import React, { Component } from 'react'
import { Item, Icon } from 'semantic-ui-react'

class TodaysPun extends Component {
  constructor(props){
    super(props)
    this.state = {
      liked: false,
      user: props.user,
      likes: props.likes,
      pun: props.pun,
      created: props.created
    }
  }

  render(){
    console.log('This is one pun item!!!!!!!: ', this.state)
    let pun = this.state
    return(
      <Item>
        <Item.Image size='mini' shape='circular' src='http://placekitten.com/g/50/50'/>

        <Item.Content>
          <Item.Header size='small'>{ pun.user.first_name }</Item.Header>
          <Item.Description>{ pun.pun }</Item.Description>
          <Item.Meta>
            <a><Icon name='like' onClick={ () => this.addLike(this) } /></a>{ pun.likes.length } likes
            <span className='pls'>created at { pun.created } </span>
          </Item.Meta>
        </Item.Content>
      </Item>
    )
  }
}

export default TodaysPun
