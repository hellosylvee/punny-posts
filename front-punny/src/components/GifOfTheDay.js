import React from 'react'

const GifOfTheDay = (props) => {
  console.log(props.gifs)
  let test = props.gifs.map((gif, i) => <li key={i}><img src='gif.images.fixed_height.url' alt='gif here'/></li>)
  return(
    <ul className='gif'>
      {test}
    </ul>
  )
}

export default GifOfTheDay
