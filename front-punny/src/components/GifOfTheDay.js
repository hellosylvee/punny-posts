import React from 'react'

const GifOfTheDay = (props) => {
  let url = <img src={props.url} alt="gif here"/>
  return(
    <li className='gif'>
      {url}
    </li>
  )
}

export default GifOfTheDay
