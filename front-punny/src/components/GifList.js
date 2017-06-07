import React from 'react'
import GifOfTheDay from './GifOfTheDay'

const GifList = (props) => {
  // let gifs = props.gifs.map((gif, i) => <li key={i}><img src={gif.images.fixed_height.url} alt='gif here' /></li>)

  let gifs = props.gifs.map(gif => <GifOfTheDay url={gif.images.fixed_height.url} key={gif.id} /> )

  return(
    <ul className='gif'>
      {gifs}
    </ul>
  )
}

export default GifList
