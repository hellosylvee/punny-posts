import React from 'react'

const SearchGif = (props) => {
  console.log('SearchGif', props)
  let gif = props.random_gif

  return(
    <div>
      <img src={gif.image_url} alt={gif.type}/>
      {props.random_gif.image_url ? <button>refresh</button> : null}
    </div>
  )
}

export default SearchGif
