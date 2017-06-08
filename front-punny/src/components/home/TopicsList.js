import React from 'react'
import Topics from './Topics'

const TopicsList = (props) => {
  return(
    <div>
      <h1>Display Topics List</h1>
      <Topics topics={props.topics}/>
    </div>
  )
}

export default TopicsList
