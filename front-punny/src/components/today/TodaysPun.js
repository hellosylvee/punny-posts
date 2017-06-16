import React from 'react'
import { Item, Icon } from 'semantic-ui-react'

const TodaysPun = (props) => {
  console.log('This is one pun item!!!!!!!: ', props.likes)
  return(
    <Item>
      <Item.Image size='mini' shape='circular' src='http://placekitten.com/g/50/50'/>

      <Item.Content>
        <Item.Header size='small'>{ props.user.first_name }</Item.Header>
        <Item.Description>{ props.pun }</Item.Description>
        <Item.Meta>
          <a><Icon name='like' onClick={ () => props.addLike(props) } /></a>{ props.likes.length }likes
          <span className='pls'>created at { props.created } </span>
        </Item.Meta>
      </Item.Content>
    </Item>
  )
}

export default TodaysPun
