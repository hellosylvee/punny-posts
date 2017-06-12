import React from 'react'
import TodaysGifItem from './TodaysGifItem'

const TodaysList = (props) => {
  console.log('what is this????', props)
  // debugger

  let gifs = props.gifs.map(gif => <TodaysGifItem url={gif.images.fixed_height.url} key={gif.id}/>)

  return(
    <div className='gif'>
      {gifs}
    </div>
  )
}

export default TodaysList
