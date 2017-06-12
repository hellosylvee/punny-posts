import React from 'react'

const SearchGifDisplay = (props) => {
  // console.log('SearchGifDisplay', props)
  let gif = props.random_gif

  return(
    <div>
      <img src={gif.image_url} alt={gif.type}/>
      {props.random_gif.image_url ? <button>select</button> : null}
    </div>
  )
}

export default SearchGifDisplay