import React from 'react'
import { Link } from 'react-router-dom'

import { Header, Item, Image, Icon } from 'semantic-ui-react'

const TodaysPun = (props) => {
  // console.log('This is one pun item!!!!!!!: ', props)
  return(
    // <div className='list-item'>
    //   <Link to={`/today/puns/${props.id}`}>{ props.pun }</Link>
    // </div>

    <Item>
      <Item.Image size='mini' src='http://placekitten.com/g/50/50' />

      <Item.Content>
        <Item.Header size='small'>{ props.user.first_name }</Item.Header>
        <Item.Description>{ props.pun }</Item.Description>
        <Item.Meta>
          <a><Icon name='like' /></a>121 likes
          <span className='pls'>created at { props.created } </span>

        </Item.Meta>
        {/* <Item.Extra>
          <a><span><Icon name='like' /></span></a>121 likes
        </Item.Extra> */}
      </Item.Content>
    </Item>
  )
}

export default TodaysPun

//
// <Card.Group>
//   <Card>
//     <Card.Content>
//       <Image floated='left' size='mini' src='/assets/images/avatar/large/steve.jpg' />
//       <Card.Header>
//         Steve Sanders
//       </Card.Header>
//       <Card.Meta>
//         Friends of Elliot
//       </Card.Meta>
//       <Card.Description>
//         <Link to={`/today/puns/${props.id}`}>{ props.pun }</Link>
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a><Icon name='like' /></a>
//     </Card.Content>
//   </Card>
// </Card.Group>
