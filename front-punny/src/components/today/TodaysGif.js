import React from 'react'

const TodaysGif = (props) => {
  // console.log('todays gif hereeeeee ', props.url)
  let url = <img src={props.url} alt="gif here"/>
  return(
    <div className='gif'>
      {url}
    </div>
  )
}

export default TodaysGif