import React from 'react'

const TodaysGif = (props) => {
  // console.log('TODAYS GIF: ', props.gif)
  // debugger
  var gif = props.gif.images ? props.gif.images.fixed_height.url : null

  return(
    <div className='gif'>
      <img src={gif} alt={props.gif.type}/>
    </div>
  )
}

export default TodaysGif
