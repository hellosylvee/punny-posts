import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const SearchGifDisplay = (props) => {
  let gif = props.random_gif
  console.log('searchgifdisplay', props)
  return(
    <Grid.Row centered columns={3} className='animated fadeIn'>
      <Grid.Column>
        <Image src={gif.image_url} size='large' shape='rounded' className='animated fadeInDown' alt={gif.type}/>
        {/* {props.random_gif.image_url ? <button}>select</button> : null} */}
      </Grid.Column>
    </Grid.Row>
  )
}

export default SearchGifDisplay
