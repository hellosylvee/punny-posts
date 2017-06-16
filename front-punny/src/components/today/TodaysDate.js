import React from 'react'
import { Header, Button } from 'semantic-ui-react'

const TodaysDate = (props) => {
  // console.log('todays DATE: ', props)
  return(
    <div className='date'>
      <Header as='h1'>Punny Post of the Day</Header>
      <Header as='h1'>{props.date}</Header>
        <Button
          size='large'
          content='prev'
          icon='left arrow'
          labelPosition='left'
          onClick={()=>props.onPrevDay()} />
        <Button
          color='teal'
          size='massive'
          content='TODAY'
          onClick={()=>props.onToday()} />
        <Button
          size='large'
          content='next'
          icon='right arrow'
          labelPosition='right'
          onClick={()=>props.onNextDay()} />
    </div>
  )
}

export default TodaysDate
