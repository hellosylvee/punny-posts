import React from 'react'

const GifOfTheDay = (props) => {
  let url = <img src={props.url} alt="gif here"/>
  return(
    <div className='gif'>
      {url}
    </div>
  )
}

export default GifOfTheDay
