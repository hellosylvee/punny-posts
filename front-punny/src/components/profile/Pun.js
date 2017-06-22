import React from 'react'
import { List } from 'semantic-ui-react'


const Pun = (props) => {
  console.log('pun ', props)
  return(
    <List.Content>
      {props.likes.count}
      {props.pun}
    </List.Content>
  )
}

export default Pun
