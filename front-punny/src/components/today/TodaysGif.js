import React from 'react'
import { Image } from 'semantic-ui-react'

const TodaysGif = (props) => {
  // console.log('TODAYS GIF: ', props.gif)
  // debugger
  var gif = props.gif.images ? props.gif.images.fixed_height.url : null

  return(
    <div className='gif mtm'>
      <Image src={gif} alt={props.gif.type} shape='rounded' bordered fluid />
    </div>
  )
}

export default TodaysGif
