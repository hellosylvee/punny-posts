import React from 'react'
import Pun from './Pun'
import { List } from 'semantic-ui-react'


const PunsTable = (props) => {
  let pun = props.puns.map( p => (
      <List.Content>
        <Pun
          pun={p.pun}
          likes={p.likes}
        />
      </List.Content>
  ))
  return(
    <List divided verticalAlign='middle'>
      <List.Item>
        {pun}
      </List.Item>
    </List>
  )
}

export default PunsTable
