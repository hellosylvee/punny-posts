import React from 'react'
import { Header, Button } from 'semantic-ui-react'

const TodaysDate = (props) => {
  // console.log('todays DATE: ', props)
  return(
    <div>
      <Header as='h1' className='animated bounceIn'>Punny Post of the Day</Header>
      <Header as='h1' className='animated bounceIn'>{props.date}</Header>
      <div className='animated fadeIn'>
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
    </div>
  )
}

export default TodaysDate
