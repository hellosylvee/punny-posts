import React from 'react'
import { Image } from 'semantic-ui-react'

const SearchGifDisplay = (props) => {
  let gif = props.random_gif
  return(
    <div>
      <Image src={gif.image_url} size='large' shape='rounded' alt={gif.type}/>
      {props.random_gif.image_url ? <button>select</button> : null}
    </div>
  )
}

export default SearchGifDisplay
