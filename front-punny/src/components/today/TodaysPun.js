import React from 'react'
import { Item, Image, Icon } from 'semantic-ui-react'

const TodaysPun = (props) => {
  // console.log('This is one pun item!!!!!!!: ', props)
  return(
    <Item>
      <Item.Image size='mini' src='http://placekitten.com/g/50/50' />

      <Item.Content>
        <Item.Header size='small'>{ props.user.first_name }</Item.Header>
        <Item.Description>{ props.pun }</Item.Description>
        <Item.Meta>
          <a><Icon name='like' /></a>121 likes
          <span className='pls'>created at { props.created } </span>
        </Item.Meta>
      </Item.Content>
    </Item>
  )
}

export default TodaysPun
